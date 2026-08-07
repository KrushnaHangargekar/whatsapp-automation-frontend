import { DemoRequest, ContactMessage, PricingPlan, ApiEndpoint, CreditPack, CreditConsumptionRule } from '@/types';

export const INITIAL_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    title: 'Starter Plan',
    monthlyPrice: '₹1,499',
    monthlyOriginalPrice: '₹1,899',
    annualPrice: '₹1,199',
    annualOriginalPrice: '₹1,499',
    subtitle: 'Essential automation & shared inbox tools for small support and sales teams starting out.',
    agentSeats: '2 Agents (AGENT role)',
    agentSeatsCount: 2,
    expansionCost: '₹499 / agent / month',
    expansionCostValue: 499,
    aiCredits: '500 AI Credits / mo',
    aiCreditsCount: 500,
    wabaAccounts: '1 Official WhatsApp Number',
    featuresHeader: 'Core Features Included',
    features: [
      'Live Shared Inbox with Real-Time Customer Chat',
      'Basic Keyword Auto-Responder Rules',
      '2 Active Visual Drag-and-Drop Chatbot Flows (ReactFlow)',
      'Product Catalog Management (Up to 20 Products)',
      'In-Chat Razorpay Payment Link Generator',
      'Dynamic CSV Broadcast Variable Mapper ({{1}}, {{2}}, {{3}})',
      'Sharp.js High-Performance Image Compression (WebP)'
    ],
    excludedFeatures: [
      'Gemini 1.5 Smart AI Assistant Copilot',
      'Round-Robin Multi-Agent Auto Assignment'
    ],
    active: true,
    highlight: false,
    cardColor: 'sky'
  },
  {
    id: 'pro',
    title: 'Pro Plan',
    monthlyPrice: '₹3,999',
    monthlyOriginalPrice: '₹4,999',
    annualPrice: '₹3,199',
    annualOriginalPrice: '₹3,999',
    subtitle: 'Autonomous AI copilot, unlimited chatbot flows & advanced SLA analytics to scale revenue.',
    agentSeats: '5 Agents (AGENT or ADMIN roles)',
    agentSeatsCount: 5,
    expansionCost: '₹399 / agent / month',
    expansionCostValue: 399,
    aiCredits: '2,500 AI Credits / mo',
    aiCreditsCount: 2500,
    wabaAccounts: '1 Official WhatsApp Number',
    featuresHeader: 'Everything in Starter, plus:',
    features: [
      'Gemini 1.5 AI Smart Copilot & Automated FAQ Assistant',
      'Autonomous E-Commerce Bot (Auto Product Lookup + Auto Razorpay Payment Link Dispatch)',
      'Multi-Agent Round-Robin Auto Assignment',
      'Agent SLA Performance Analytics & First Response Time (FRT) Leaderboard',
      'Unlimited Active Visual Chatbot Flows',
      'Unlimited Product Catalog Items',
      'Broadcast Campaign Analytics (Sent, Delivered, Read, Replied Attribution)',
      'Quick Reply Snippets (/ shortcut autocomplete)'
    ],
    active: true,
    highlight: true,
    badge: 'Most Popular',
    cardColor: 'emerald'
  },
  {
    id: 'enterprise',
    title: 'Enterprise Plan',
    monthlyPrice: '₹8,999',
    monthlyOriginalPrice: '₹11,249',
    annualPrice: '₹7,199',
    annualOriginalPrice: '₹8,999',
    subtitle: 'High-volume infrastructure with custom AI fine-tuning, webhook integrations & dedicated SLA.',
    agentSeats: '15 Agents included',
    agentSeatsCount: 15,
    expansionCost: '₹299 / agent / month',
    expansionCostValue: 299,
    aiCredits: '10,000 AI Credits / mo',
    aiCreditsCount: 10000,
    wabaAccounts: 'Up to 3 WhatsApp Numbers',
    featuresHeader: 'Everything in Pro, plus:',
    features: [
      'Dedicated Account Manager & Priority WhatsApp Support',
      'Custom AI Knowledgebase Fine-Tuning & Prompt Customization',
      'Webhook Workflows & Third-Party System Integration (Shopify/WooCommerce/Custom CRM)',
      'Advanced SLA Breach Escalation Alerts',
      '99.9% Uptime Service Level Agreement (SLA)'
    ],
    active: true,
    highlight: false,
    badge: 'Custom Scale',
    cardColor: 'purple'
  }
];

export const ADDON_CREDIT_PACKS: CreditPack[] = [
  {
    id: 'pack-1',
    price: '₹500',
    priceValue: 500,
    credits: '1,000 Credits',
    creditsCount: 1000,
    perCreditRate: '₹0.50 / credit'
  },
  {
    id: 'pack-2',
    price: '₹1,500',
    priceValue: 1500,
    credits: '3,500 Credits',
    creditsCount: 3500,
    perCreditRate: '₹0.42 / credit',
    highlight: true,
    badge: 'Best Value'
  },
  {
    id: 'pack-3',
    price: '₹3,500',
    priceValue: 3500,
    credits: '10,000 Credits',
    creditsCount: 10000,
    perCreditRate: '₹0.35 / credit'
  }
];

export const AI_CREDIT_CONSUMPTION_METRICS: CreditConsumptionRule[] = [
  {
    icon: 'Sparkles',
    title: 'Gemini 1.5 AI Suggested Reply',
    description: 'Generates real-time suggested response for agent in Live Shared Inbox',
    rate: '1 AI Credit'
  },
  {
    icon: 'Bot',
    title: 'Autonomous Commerce Bot Dispatch',
    description: 'Auto-product catalog lookup + instant Razorpay payment link generation',
    rate: '1 AI Credit'
  },
  {
    icon: 'GitFork',
    title: 'Multi-Step Visual Flow Execution',
    description: 'Executes 1 complete automated interactive visual chatbot workflow run',
    rate: '1 AI Credit'
  }
];

export const WATI_FAQS = [
  {
    q: 'How do Agent Seats & Expansion Costs work?',
    a: 'Each tier includes a set number of agent seats (2 in Starter, 5 in Pro, 15 in Enterprise). Need more team members? Easily add extra agent seats at ₹499/mo (Starter), ₹399/mo (Pro), or ₹299/mo (Enterprise) per agent.'
  },
  {
    q: 'What counts as 1 AI Credit?',
    a: '1 AI Credit is consumed when generating 1 Gemini 1.5 AI suggested reply in the shared inbox, executing 1 autonomous e-commerce product lookup + payment link dispatch, or running 1 multi-step visual chatbot flow.'
  },
  {
    q: 'What happens if I run out of AI Credits in a month?',
    a: 'Your core inbox and manual agent features remain active! You can instantly top up AI credits anytime with Add-on Credit Packs starting from ₹500 for 1,000 credits (down to ₹0.35/credit).'
  },
  {
    q: 'Can I upgrade or downgrade my subscription plan at any time?',
    a: 'Yes, you can upgrade, downgrade, or update agent seat allocations directly from your account settings with prorated billing adjustments.'
  }
];


export const INITIAL_DEMO_REQUESTS: DemoRequest[] = [
  {
    id: 'lead-101',
    name: 'Sarah Jenkins',
    company: 'Apex Retail Commerce',
    email: 'sarah.j@apexretail.io',
    phone: '+1 (555) 234-5678',
    industry: 'E-commerce',
    messageVolume: '50k-250k',
    requirements: 'Looking for WhatsApp Marketing, Bulk Message Sending, and AI Automation Reply Bots.',
    status: 'New',
    createdAt: '2026-08-04T14:30:00.000Z'
  }
];

export const INITIAL_CONTACT_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-201',
    name: 'David Miller',
    email: 'david.m@techstart.io',
    phone: '+1 (555) 444-3322',
    message: 'Hello! I would like to know more about Wabtic AI automation reply bots and campaign scheduling.',
    resolved: false,
    createdAt: '2026-08-04T12:00:00.000Z'
  }
];

export const API_DOCS_DATA: ApiEndpoint[] = [
  {
    id: 'auth',
    category: 'Authentication',
    title: 'API Authentication',
    description: 'Authenticate your requests by including your bearer token in the HTTP Authorization header of every API call.',
    method: 'GET',
    endpoint: '/v1/auth/verify',
    headers: {
      'Authorization': 'Bearer wabtic_live_sk_9f8d7c6b5a4e3d2c1b0a',
      'Content-Type': 'application/json'
    },
    bodyParams: [],
    samplePayload: null,
    sampleResponses: [
      {
        status: 200,
        title: 'Authentication Successful',
        body: {
          status: 'success',
          account_id: 'acc_wabtic_8839201',
          business_name: 'Wabtic Automation',
          phone_number: '+1 (800) 555-0199',
          quality_rating: 'GREEN',
          messaging_tier: 'TIER_250K',
          verified: true
        }
      }
    ],
    codeSamples: {
      node: `const axios = require('axios');

async function verifyAuth() {
  const response = await axios.get('https://api.wabtic.com/v1/auth/verify', {
    headers: { 'Authorization': 'Bearer WABTIC_API_KEY' }
  });
  console.log(response.data);
}
verifyAuth();`,
      python: `import requests

res = requests.get("https://api.wabtic.com/v1/auth/verify", headers={"Authorization": "Bearer WABTIC_API_KEY"})
print(res.json())`,
      php: `<?php
$ch = curl_init('https://api.wabtic.com/v1/auth/verify');
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: Bearer WABTIC_API_KEY']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
echo curl_exec($ch);
?>`,
      curl: `curl -X GET "https://api.wabtic.com/v1/auth/verify" -H "Authorization: Bearer WABTIC_API_KEY"`
    }
  },
  {
    id: 'send-message',
    category: 'Messages',
    title: 'Send Text Message',
    description: 'Dispatch a WhatsApp bulk marketing or campaign message.',
    method: 'POST',
    endpoint: '/v1/messages/text',
    headers: {
      'Authorization': 'Bearer wabtic_live_sk_9f8d7c6b5a4e3d2c1b0a',
      'Content-Type': 'application/json'
    },
    bodyParams: [
      { name: 'to', type: 'string', required: true, description: 'Recipient phone number in E.164 format' },
      { name: 'text', type: 'string', required: true, description: 'Message body text' }
    ],
    samplePayload: {
      to: '+14155552671',
      text: 'Hi Alex! Sent via Wabtic Automation.'
    },
    sampleResponses: [
      {
        status: 200,
        title: 'Message Queued',
        body: { success: true, message_id: 'wamid.HBgLMTQxNTU1NTI2NzEVAg==' }
      }
    ],
    codeSamples: {
      node: `const axios = require('axios');
axios.post('https://api.wabtic.com/v1/messages/text', { to: '+14155552671', text: 'Hello from Wabtic!' }, { headers: { 'Authorization': 'Bearer WABTIC_KEY' } });`,
      python: `import requests
requests.post('https://api.wabtic.com/v1/messages/text', json={'to': '+14155552671', 'text': 'Hello from Wabtic!'}, headers={'Authorization': 'Bearer WABTIC_KEY'})`,
      php: `<?php echo "curl request to wabtic"; ?>`,
      curl: `curl -X POST "https://api.wabtic.com/v1/messages/text" -H "Authorization: Bearer WABTIC_KEY" -d '{"to":"+14155552671","text":"Hello"}'`
    }
  }
];
