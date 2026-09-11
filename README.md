# Candid Solutions website revamp

Public marketing site for **Candid Solutions** (`candid.solutions`).

This is a standalone project. It is not CandidIQ / candidportal, and it is not JoeBod.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Brand colors and wordmark from Candid’s existing identity

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home |
| `/solutions` | Technology offerings |
| `/about` | Why Candid |
| `/agents` | Partner / agent program |
| `/contact` | Connect |

Contact forms currently open a prefilled email to `connect@candid.solutions`. Wire a backend later if you want submissions in CRM.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
