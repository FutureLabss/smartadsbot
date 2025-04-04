# SmartAdsBot

AI-Powered Facebook Messenger Ad Responder - A multi-tenant chatbot platform for businesses to automate responses to Facebook click-to-Messenger ads.

## Features

- Multi-Page Support
- Click-to-Messenger Ad Response
- Custom Auto-Replies
- Lead Capture & CRM
- Dashboard & Analytics
- Payment Integration

## Tech Stack

- Frontend: Next.js with TypeScript
- UI: Chakra UI
- Authentication: NextAuth.js
- Database: PostgreSQL with Prisma
- API: Facebook Graph API
- Payments: Stripe

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env` file with the following variables:
```
DATABASE_URL="postgresql://..."
FACEBOOK_CLIENT_ID="..."
FACEBOOK_CLIENT_SECRET="..."
NEXTAUTH_SECRET="..."
STRIPE_SECRET_KEY="..."
```
