export type UserRole = 'admin' | 'user';

export interface User {
  $id?: string;
  id?: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Closed';

export interface DemoRequest {
  $id?: string;
  id?: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  messageVolume: string;
  requirements: string;
  status: LeadStatus;
  createdAt: string;
}

export interface ContactMessage {
  $id?: string;
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  resolved: boolean;
  createdAt: string;
}

export interface PricingPlan {
  $id?: string;
  id?: string;
  title: string;
  price: string;
  originalPrice?: string;
  subtitle?: string;
  period: string;
  conversations: string;
  apiAccess: string;
  support: string;
  integrations: string[];
  features: string[];
  active: boolean;
  highlight?: boolean;
}

export interface TemplateButton {
  type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';
  text: string;
  value?: string;
}

export interface TemplateMessage {
  id?: string;
  name: string;
  language: string;
  category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';
  headerType: 'NONE' | 'TEXT' | 'IMAGE' | 'VIDEO' | 'DOCUMENT';
  headerMediaUrl?: string;
  headerText?: string;
  bodyText: string;
  footerText?: string;
  buttons: TemplateButton[];
  status?: 'APPROVED' | 'PENDING' | 'REJECTED';
}

export interface ApiParam {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface ApiEndpoint {
  id: string;
  category: 'Authentication' | 'Messages' | 'Templates' | 'Media' | 'Webhooks' | 'Analytics';
  title: string;
  description: string;
  method: 'POST' | 'GET' | 'DELETE' | 'PUT';
  endpoint: string;
  headers: Record<string, string>;
  bodyParams: ApiParam[];
  samplePayload: any;
  sampleResponses: {
    status: number;
    title: string;
    body: any;
  }[];
  codeSamples: {
    node: string;
    python: string;
    php: string;
    curl: string;
  };
}

export interface SystemStats {
  totalLeads: number;
  demoRequests: number;
  contactMessages: number;
  activePlans: number;
  monthlyMessagesProcessed: number;
  deliveryRatePercentage: number;
  responseRatePercentage: number;
}
