import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const poppins = Poppins({ weight: '300', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App Financeiro',
  description: 'App financeiro desenvolvido em nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(poppins.className, "bg-gray-400")}>{children}</body>
    </html>
  )
}
