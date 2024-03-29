import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '전문가의힘',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/student_config">학생관리</Link>
          <Link href="/point_reward">포인트 교환</Link>
          <Link href="/cart">장바구니</Link>
        </div>
        {children}
      </body>
    </html>
  )
}