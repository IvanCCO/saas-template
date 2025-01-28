# SaaS Template: Launch Your Startup in Minutes, Not Months 🚀

Transform your ideas into reality with this ready-to-use SaaS template. Featuring a pre-built, well-structured codebase packed with integrations, this template makes development effortless. Plus, it’s thoroughly documented to get you started right away.

🌟 Features
- **MongoDB** with Mongoose for seamless database management
- **Resend** for effortless email handling
- **Stripe** to handle payments with ease
- **NextAuth** for secure and simple user authentication

🏗️ Domain-Driven Design for Clear Business Logic
- Keep business rules isolated in the domain layer
- Use interface-driven communication between layers

⚡ Developer Tools to Build Fast and Efficiently
- **Next.js** 15 with React 18 for modern web apps
- **TypeScript** for type safety and maintainability
- **Chakra UI** v3 for beautiful, responsive UI components
- Pre-configured tooling for best practices:
    - Code linting and formatting: eslint, prettier
    - Git hooks: husky, lint-staged
    - Commit conventions: commitlint, commitizen, and standard-version
- 🔎 SEO Optimization with next-sitemap – pre-configured and ready to tweak for your needs
- 🎨 Basic responsive layout included – customize or remove as needed
- 🤖 Automated Dependency Updates with Renovate
- 🏎️ **Turbo** setup for monorepo efficiency
- 🧪 Playwright for end-to-end testing

### TODO
- [ ] Stripe
  - [ ] Webhook
  - [ ] Checkout endpoint
  - [ ] Document
- [ ] Resend
  - [ ] Create user gateway
  - [ ] Send Email
  - [ ] Email component
  - [ ] Document
- [ ] NextAuth
  - [ ] Google Provider
  - [ ] MagicLink Provider
  - [ ] email/password Provider
  - [ ] Confirm email
  - [ ] Document


## Pre-requisites

1. [Node.js](https://nodejs.org/en/) or nvm installed.
2. `pnpm` installed.

## Getting Started

1. You can either click `Use this template` button on this repository and clone the repo or directly from your terminal:

```bash
npx degit agustinusnathaniel/nextarter-chakra <YOUR_APP_NAME>
```

2. After cloning the project, run this command: `pnpm` or `pnpm install`

3. Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/lib/pages/index.tsx`. The page auto-updates as you edit the file.
