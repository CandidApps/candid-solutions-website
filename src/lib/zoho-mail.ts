import { site } from "@/lib/site";

type TokenResponse = {
  access_token?: string;
  error?: string;
  error_description?: string;
};

type ZohoSendBody = {
  fromAddress: string;
  toAddress: string;
  subject: string;
  content: string;
  mailFormat?: "html" | "plaintext";
  replyTo?: string;
};

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

/** Exchange refresh token for a short-lived access token. */
export async function getZohoAccessToken() {
  const clientId = requiredEnv("ZOHO_CLIENT_ID");
  const clientSecret = requiredEnv("ZOHO_CLIENT_SECRET");
  const refreshToken = requiredEnv("ZOHO_REFRESH_TOKEN");
  const accountsUrl =
    process.env.ZOHO_ACCOUNTS_URL?.trim() || "https://accounts.zoho.com";

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
  });

  const response = await fetch(`${accountsUrl}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = (await response.json()) as TokenResponse;
  if (!response.ok || !data.access_token) {
    console.error("zoho: token refresh failed", data);
    throw new Error(data.error_description || data.error || "Zoho token refresh failed");
  }

  return data.access_token;
}

/** Send mail via Zoho Mail API (supports group From when the user has Send As). */
export async function sendZohoMail(input: {
  subject: string;
  html: string;
  replyTo: string;
}) {
  const accessToken = await getZohoAccessToken();
  const accountId = requiredEnv("ZOHO_ACCOUNT_ID");
  const mailApi =
    process.env.ZOHO_MAIL_API_URL?.trim() || "https://mail.zoho.com/api";
  const fromAddress =
    process.env.ZOHO_FROM_ADDRESS?.trim() || site.email;
  const toAddress =
    process.env.CONTACT_TO_EMAIL?.trim() || site.email;

  const payload: ZohoSendBody = {
    fromAddress,
    toAddress,
    subject: input.subject,
    content: input.html,
    mailFormat: "html",
    replyTo: input.replyTo,
  };

  const response = await fetch(
    `${mailApi}/accounts/${accountId}/messages`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
      body: JSON.stringify(payload),
    },
  );

  const data = (await response.json().catch(() => null)) as unknown;
  if (!response.ok) {
    console.error("zoho: send failed", response.status, data);
    throw new Error("Zoho Mail API send failed");
  }

  return data;
}

export function zohoConfigured() {
  return Boolean(
    process.env.ZOHO_CLIENT_ID &&
      process.env.ZOHO_CLIENT_SECRET &&
      process.env.ZOHO_REFRESH_TOKEN &&
      process.env.ZOHO_ACCOUNT_ID,
  );
}
