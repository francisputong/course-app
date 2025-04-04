import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import React, { Suspense } from 'react';

import { AppProvider } from './provider';

import { Toaster } from '@/components/ui/toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <ClerkProvider>
        <html lang="en">
          <body className="antialiased">
            <AppProvider>{children}</AppProvider>
            <Toaster richColors />
          </body>
        </html>
      </ClerkProvider>
    </Suspense>
  );
}
