import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/app/providers'
import localFont from 'next/font/local'
import clsx from 'classnames'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

export const metadata: Metadata = {
  title: 'Ascendio - Ascend a turborepo project in seconds',
  description:
    'Designed to simplify the initial setup of your turborepo project. Ideal for indie developers or people looking to create a micro SaaS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, monaSans.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
