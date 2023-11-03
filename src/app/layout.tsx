import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { BaseLayout } from 'components/Layout/BaseLayout';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shoppy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>
        {children}
        </BaseLayout>
        </body>
    </html>
  )
}
