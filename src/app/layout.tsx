import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'MindSpring: Mental Reset',
  description: 'Clear your mind in 3 minutes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D9E8F5" />
      </head>

      <body className="font-body antialiased h-full bg-gradient-to-br from-[#E0F7FA] to-[#F3E5F5]">
        
        {/* Accessibility helper */}
        <a
          href="#mindspring-main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-foreground focus:px-3 focus:py-2 rounded"
        >
          Skip to content
        </a>

        {/* App Container with scroll enabled */}
        <div
          className="max-w-sm mx-auto h-full bg-background/80 backdrop-blur-lg shadow-2xl flex flex-col overflow-hidden relative rounded-2xl ring-1 ring-black/5"
          role="application"
          aria-label="MindSpring App"
        >
          {/* Scrollable inner content */}
          <main
            id="mindspring-main"
            className="flex-1 overflow-y-auto overflow-x-hidden"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {children}
          </main>
        </div>

        {/* JS disabled fallback */}
        <noscript>
          <div style={{
            position: 'fixed',
            bottom: 12,
            left: 12,
            right: 12,
            zIndex: 9999,
            padding: 12,
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            borderRadius: 8,
            textAlign: 'center',
            fontSize: 13
          }}>
            JavaScript is disabled — MindSpring works best with JavaScript enabled.
          </div>
        </noscript>

        <Toaster />
      </body>
    </html>
  );
}
