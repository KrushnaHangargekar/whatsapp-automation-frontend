export interface PricingPlan {
  id: string;
  title: string;
  annualPrice: string;
  annualOriginalPrice?: string;
  monthlyPrice: string;
  monthlyOriginalPrice?: string;
  subtitle: string;
  conversations: string;
  featuresHeader?: string;
  features: string[];
  usage: string[];
  active: boolean;
  highlight?: boolean;
  cardColor?: string;
}

export interface DemoRequest {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  messageVolume: string;
  requirements: string;
  status: 'New' | 'Contacted' | 'Closed';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  resolved: boolean;
  createdAt: string;
}

export interface ApiEndpoint {
  id: string;
  category: string;
  title: string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  headers: Record<string, string>;
  bodyParams?: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
  }>;
  samplePayload?: any;
  sampleResponses: Array<{
    status: number;
    title: string;
    body: any;
  }>;
  codeSamples: {
    curl: string;
    node: string;
    python: string;
    php: string;
  };
}

export type NavTab = 
  | 'home'
  | 'features'
  | 'solutions'
  | 'pricing'
  | 'docs'
  | 'contact'
  | 'demo'
  | 'link-generator'
  | 'qr-generator'
  | 'template-builder';
