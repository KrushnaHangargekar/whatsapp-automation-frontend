import { DemoRequest, ContactMessage, PricingPlan, ApiEndpoint } from '@/types';

export const INITIAL_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-growth',
    title: 'Growth',
    annualPrice: '₹2199',
    annualOriginalPrice: '₹2749',
    monthlyPrice: '₹2699',
    monthlyOriginalPrice: '₹3374',
    subtitle: 'Reach thousands of customers with automations that keep conversations moving 24*7',
    conversations: 'Connect any 1 Channel. 3 Users Included. No additional users. Additional charges apply for messages',
    featuresHeader: 'Key features',
    features: [
      'Zero-fee WhatsApp setup: Get Official WhatsApp API, Blue Tick Verification help',
      'Omnichannel inbox: WhatsApp Messages, WhatsApp Business Calling, FB, Instagram, QR code, widget, wa.me',
      'Campaigns: Run broadcast campaigns, automate DM and comment engagement on Instagram and FB Messenger',
      'Acquire leads: Launch CTWA ads and capture leads on WhatsApp',
      'Team inbox staples: Assign, track, automate follow-ups, tag & report',
      'E-Commerce tools: WhatsApp Catalog, Shopify abandon cart & order templates',
      '24x5 Email Support: in English and Portuguese, with basic SLA coverage'
    ],
    usage: [
      '15k Broadcasts/month, Standard rates',
      '1,000 Free Automation triggers/month',
      '2 select Commerce/CRM integrations',
      '10k API calls/mon, No Webhooks',
      '250 Free AI Co-pilot credits/mon'
    ],
    active: true,
    highlight: false,
    cardColor: 'blue'
  },
  {
    id: 'plan-pro',
    title: 'Pro',
    annualPrice: '₹4899',
    annualOriginalPrice: '₹6124',
    monthlyPrice: '₹6499',
    monthlyOriginalPrice: '₹8124',
    subtitle: 'Turn conversations into conversions. AI qualify leads, nurtures them, and built-in analytics show you what\'s driving revenue.',
    conversations: '5 Users Included. Additional Users @ ₹1299/user/month. Additional charges apply for messages',
    featuresHeader: 'Everything in Growth, plus:',
    features: [
      'Auto-qualify leads: Advanced chatbots, forms, integrations & IG automation',
      'Boost conversion: Smart retargeting, Carousel template & Catalog pay options',
      'Optimize Campaigns: CTWA source tags, click tracking & engagement insights',
      '✨ Advanced Automation: Answer queries, collect information, send reminders & more with powerful chatbots',
      '✨ Astra AI Agents: Create and deploy AI Agents to web, WhatsApp and voice (Astra add-on, priced separately)',
      'Advanced team inbox: Teams, auto routing, and operator reports',
      'Drive Shopify sales: Campaign based on buyer data, Shopflo/Gokwik checkout',
      '24x7 Email & Chat Support: Standard SLAs to support your operations'
    ],
    usage: [
      'Unlimited Broadcasts, Standard rates',
      '2,000 Free Automation triggers/month',
      '5 integrations incl. Hubspot',
      '200k API calls/mon, Limited Webhooks',
      '500 Free AI Co-pilot credits/mon'
    ],
    active: true,
    highlight: true,
    cardColor: 'emerald'
  },
  {
    id: 'plan-business',
    title: 'Business',
    annualPrice: '₹14799',
    annualOriginalPrice: '₹18499',
    monthlyPrice: '₹18499',
    monthlyOriginalPrice: '₹23124',
    subtitle: 'Your full revenue engine. Advanced AI agents + multiple numbers to handle entire customer journeys: with dedicated expert support.',
    conversations: '5 Users Included. Additional Users @ ₹2199/user/month. Additional charges apply for messages',
    featuresHeader: 'Everything in Pro +',
    features: [
      'Scale effortlessly: Send 4k messages/min, get volume discounts & SMS fallback',
      'G Official Google Partner: Asia\'s only Google Ads to WhatsApp Provider',
      'Best-in-class ROI: Optimize CTWA ads, track conversion, use WhatsApp Pay API',
      'Run teams smoothly: Multiple WhatsApp numbers & round-robin chat assignment',
      'Dedicated Customer Success Manager for strategic recommendations',
      'Enhance privacy & compliance: Phone number masking, Roles & IP Whitelisting',
      'Priority 24x7 Email & Chat support, with access to paid TAM services'
    ],
    usage: [
      'Unlimited Broadcasts, Volume discounts',
      '5,000 Free Automation triggers/month',
      'Unlimited integrations incl. Salesforce',
      '20M API calls/mon, Extensive Webhooks',
      '1500 Free AI Co-pilot credits/mon',
      'Blitz add-on: Send 12k messages/min'
    ],
    active: true,
    highlight: false,
    cardColor: 'purple'
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
