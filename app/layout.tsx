import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

const font = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'] });

export const metadata: Metadata = {
  title: 'Travel Buddy',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={cn(font.className, 'min-h-screen bg-primary-50')}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
