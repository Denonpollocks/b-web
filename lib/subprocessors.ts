export type Subprocessor = {
  name: string;
  href?: string;
  purpose: string;
  location: string;
  dataCategories: string;
};

export const subprocessors: Subprocessor[] = [
  {
    name: "Supabase, Inc.",
    href: "https://supabase.com",
    purpose: "Primary database, authentication, storage, realtime, edge functions",
    location: "EU / US",
    dataCategories: "All customer and end-user data stored in the platform",
  },
  {
    name: "Meta Platforms, Inc.",
    href: "https://www.meta.com",
    purpose:
      "Facebook Messenger, Instagram DM, WhatsApp Business Cloud API, Lead Ads, Marketing API",
    location: "US / EU (regional infrastructure)",
    dataCategories: "Conversation content, contact identifiers, ad and lead data",
  },
  {
    name: "OpenAI, L.L.C.",
    href: "https://openai.com",
    purpose: "AI agents, drafting, summarisation, classification (gpt-4o-mini and related)",
    location: "US",
    dataCategories: "Prompts and conversation context (no model training on API data)",
  },
  {
    name: "Google LLC (Gemini / Google Cloud)",
    href: "https://cloud.google.com",
    purpose:
      "Gemini models for Becko Studio and travel cards; hosting components where applicable",
    location: "US / EU",
    dataCategories: "Prompts, creative inputs, generated media",
  },
  {
    name: "Amazon Web Services, Inc. (AWS)",
    href: "https://aws.amazon.com",
    purpose: "Infrastructure for selected hosting, storage, and CDN components",
    location: "EU / US",
    dataCategories: "Cached and stored platform data",
  },
  {
    name: "Resend",
    href: "https://resend.com",
    purpose: "Transactional and notification email delivery",
    location: "US / EU",
    dataCategories: "Recipient email addresses, message content, delivery metadata",
  },
  {
    name: "RapidAPI / Travel API providers",
    href: "https://rapidapi.com",
    purpose:
      "Flight, hotel, and transfer search and content APIs (e.g. Booking.com, Sky-Scrapper, Brightsun, Ratehawk)",
    location: "Global",
    dataCategories: "Search parameters, traveller counts, dates, destinations",
  },
  {
    name: "TikTok / ByteDance",
    href: "https://business.tiktok.com",
    purpose: "TikTok Business API for content publishing and insights (when connected)",
    location: "Global",
    dataCategories: "Posted media, captions, performance metrics",
  },
  {
    name: "Stripe / Paddle / TRU Connect",
    href: "https://stripe.com",
    purpose:
      "Payment processing (where enabled by the customer's brand)",
    location: "Global",
    dataCategories:
      "Payment metadata, billing details (card data is handled directly by the gateway)",
  },
];
