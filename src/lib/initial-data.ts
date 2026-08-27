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
    q: 'What is your Subscription Cancellation & Credit Policy?',
    a: 'Subscriptions can be cancelled at any time through your account settings to stop future billing renewals. Purchased credits and prepaid balances are non-refundable, non-transferable, and remain in your account for your business use through Wabtic. Our engineering support team guarantees 24 to 48 hour resolution for any technical or platform inquiries.'
  },
  {
    q: 'How are payments processed, and is it compliant with RBI rules?',
    a: 'All transactions are processed in INR (₹) via PCI DSS v4.0.1 certified Indian Payment Gateways (Razorpay, Cashfree, Stripe) with 256-bit TLS encryption. In compliance with RBI directives, card details are tokenised and transaction data is stored in Indian GCP data centers.'
  },
  {
    q: 'How fast is digital service fulfillment upon payment?',
    a: 'Fulfillment is 100% instant (&lt; 60 seconds). Once payment authorization is confirmed by the gateway webhook, your account subscription dashboard, Meta WhatsApp API keys, and credit allocations are activated automatically.'
  },
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
  },
  {
    id: 'pg-webhook',
    category: 'Payment Gateway Integration',
    title: 'Razorpay / Cashfree Webhook Handler',
    description: 'Receive real-time payment events from PCI-DSS v4.0.1 compliant gateways to trigger instant digital SaaS fulfillment and account credit allocations.',
    method: 'POST',
    endpoint: '/v1/payments/webhook',
    headers: {
      'X-Razorpay-Signature': '25a7a9...hmac_sha256_hash...',
      'Content-Type': 'application/json'
    },
    bodyParams: [
      { name: 'event', type: 'string', required: true, description: 'Event type (e.g. payment.captured, subscription.charged)' },
      { name: 'payload', type: 'object', required: true, description: 'Gateway payload containing payment_id, order_id, amount_in_paisa' }
    ],
    samplePayload: {
      event: 'payment.captured',
      payload: {
        payment: {
          id: 'pay_P9a8b7c6d5',
          order_id: 'order_Wabtic_9981',
          amount: 471880,
          currency: 'INR',
          status: 'captured',
          method: 'upi',
          vpa: 'user@okhdfcbank'
        }
      }
    },
    sampleResponses: [
      {
        status: 200,
        title: 'Instant Service Provisioned',
        body: {
          success: true,
          fulfillment_status: 'COMPLETED',
          activation_latency: '1.2s',
          tax_invoice_number: 'INV-2026-08-9981',
          wallet_balance_credited: 'INR 4718.80'
        }
      }
    ],
    codeSamples: {
      node: `const crypto = require('crypto');
function verifyWebhook(body, signature, secret) {
  const expected = crypto.createHmac('sha256', secret).update(body).digest('hex');
  return expected === signature;
}`,
      python: `import hmac, hashlib
def verify_sig(body, sig, secret):
    expected = hmac.new(secret.encode(), body.encode(), hashlib.sha256).hexdigest()
    return expected == sig`,
      php: `<?php $expected = hash_hmac('sha256', $body, $secret); ?>`,
      curl: `curl -X POST "https://api.wabtic.com/v1/payments/webhook" -H "Content-Type: application/json" -d '{"event":"payment.captured"}'`
    }
  },
  {
    id: 'merchant-compliance',
    category: 'RBI & Merchant Compliance',
    title: 'Merchant Registration & Verification Info',
    description: 'Fetch official merchant identity, RBI data localization status, MCC classification, and statutory grievance details for payment gateway audits.',
    method: 'GET',
    endpoint: '/v1/compliance/merchant',
    headers: {
      'Authorization': 'Bearer wabtic_live_sk_9f8d7c6b5a4e3d2c1b0a'
    },
    bodyParams: [],
    samplePayload: null,
    sampleResponses: [
      {
        status: 200,
        title: 'Merchant Verification Data',
        body: {
          legal_entity: 'PROWEXA TECHNOLOGIES PRIVATE LIMITED',
          cin: 'U62090PN2025PTC249889',
          brand_name: 'Wabtic',
          mcc_codes: ['5734', '7372'],
          rbi_compliance: 'DATA_LOCALIZATION_COMPLIANT',
          data_localization: 'GCP_MUMBAI_ASIA_SOUTH1',
          cancellation_policy: 'CREDITS_NON_REFUNDABLE_BUSINESS_USE_ONLY',
          grievance_officer: 'Mr. Rahul Sharma (grievance@prowexa.com)'
        }
      }
    ],
    codeSamples: {
      node: `const res = await axios.get('https://api.wabtic.com/v1/compliance/merchant');`,
      python: `res = requests.get('https://api.wabtic.com/v1/compliance/merchant')`,
      php: `<?php echo "Merchant Compliance Query"; ?>`,
      curl: `curl -X GET "https://api.wabtic.com/v1/compliance/merchant"`
    }
  }
];

