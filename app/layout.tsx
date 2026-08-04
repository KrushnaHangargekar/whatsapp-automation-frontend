import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Wabtic | Automate Your WhatsApp Growth',
  description: 'Wabtic is the ultimate WhatsApp Marketing & Automation platform. Features include Bulk Message Sending, Live Insights, AI Automation Reply Bots, and Campaign Scheduling.',
  keywords: [
    'Wabtic',
    'WhatsApp Marketing',
    'Bulk Message Sending',
    'Live Insights',
    'AI Automation Reply Bots',
    'Campaign Schedule',
    'WhatsApp Business API'
  ],
  authors: [{ name: 'Wabtic Team' }],
  openGraph: {
    title: 'Wabtic | Automate Your WhatsApp Growth',
    description: 'Empower customer outreach with Wabtic: WhatsApp Marketing, Bulk Message Sending, Live Insights, AI Automation Reply Bots, and Campaign Scheduling.',
    url: 'https://wabtic.com',
    siteName: 'Wabtic',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-slate-950">
        <ThemeProvider defaultTheme="dark" storageKey="wa-platform-theme">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
