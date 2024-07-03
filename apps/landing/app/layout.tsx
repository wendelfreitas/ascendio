import { ThemeProvider } from '@ascendio/ui';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Ascendio - Ascend a turborepo project in seconds',
  description:
    'Designed to simplify the initial setup of your turborepo project. Ideal for indie developers or people looking to create a micro SaaS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en" className="h-full antialiased">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
          className={`flex min-h-full flex-col bg-gray-950 ${geistSans.variable} ${geistMono.variable}`}
        >
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
