import { DemoRequest, ContactMessage, PricingPlan, ApiEndpoint } from '@/types';

export const INITIAL_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-growth',
    title: 'Growth',
    price: '₹1,759',
    originalPrice: '₹2,199',
    subtitle: 'Reach thousands of customers with automations that keep conversations moving 24*7',
    period: '/month billed annually (20% OFF)',
    conversations: 'Connect any 1 Channel. 3 Users Included. No additional users.',
    apiAccess: 'Standard REST API',
    support: '24x5 Email Support',
    integrations: ['Webhooks', 'REST API', 'CRM Sync'],
    features: [
      'WhatsApp Marketing Campaigns',
      'Bulk Message Sending',
      'Live Insights & Analytics',
      'AI Automation Reply Bots',
      'Campaign Schedule',
      'Zero-fee WhatsApp Setup & Blue Tick Help'
    ],
    active: true,
    highlight: false
  },
  {
    id: 'plan-pro',
    title: 'Pro',
    price: '₹3,919',
    originalPrice: '₹4,899',
    subtitle: 'Turn conversations into conversions. AI qualify leads, nurtures them, and built-in analytics show you what\'s driving revenue.',
    period: '/month billed annually (20% OFF)',
    conversations: '5 Users Included. Additional Users @ ₹1299/user/month',
    apiAccess: 'High Speed API',
    support: '24x7 Email & Live Chat Support',
    integrations: ['Webhooks', 'REST API', 'CRM Sync'],
    features: [
      'Everything in Growth, plus:',
      'WhatsApp Marketing (Advanced Retargeting)',
      'Bulk Message Sending (High Capacity)',
      'Live Insights & Click Tracking Insights',
      'AI Automation Reply Bots (Smart Lead Qualification)',
      'Campaign Schedule & Auto-routing'
    ],
    active: true,
    highlight: true
  },
  {
    id: 'plan-business',
    title: 'Business',
    price: '₹11,839',
    originalPrice: '₹14,799',
    subtitle: 'Your full revenue engine. Advanced AI agents + multiple numbers to handle entire customer journeys with dedicated expert support.',
    period: '/month billed annually (20% OFF)',
    conversations: '5 Users Included. Additional Users @ ₹2199/user/month',
    apiAccess: 'High Throughput Dedicated API',
    support: 'Priority 24x7 Email & Chat Support + Dedicated TAM',
    integrations: ['All CRM Systems', 'Zapier', 'Webhooks'],
    features: [
      'Everything in Pro, plus:',
      'WhatsApp Marketing (Unlimited Scale)',
      'Bulk Message Sending (4k messages/min)',
      'Live Insights & Custom BI Reports',
      'AI Automation Reply Bots (Multiple WhatsApp Numbers)',
      'Dedicated Customer Success Manager'
    ],
    active: true,
    highlight: false
  }
];

export const WATI_FAQS = [
  {
    q: 'What are WhatsApp Conversation Fees?',
    a: 'WhatsApp charges per 24-hour conversation window rather than per individual message. A conversation window starts when the first message is delivered and remains open for 24 hours.'
  },
  {
    q: 'How does Wabtic pricing work?',
    a: 'Wabtic charges a flat monthly platform subscription fee (with 20% OFF across all tiers) plus standard Meta WhatsApp conversation charges passed through directly based on recipient country rates.'
  },
  {
    q: 'What is included in the 1,000 Free Service Conversations?',
    a: 'Meta provides 1,000 free service (user-initiated) conversations each month for every WhatsApp Business Account.'
  },
  {
    q: 'Can I upgrade or downgrade my plan at any time?',
    a: 'Absolutely. You can switch plans or change your subscription directly from your Wabtic settings panel at any time.'
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

