import type { Metadata } from 'next'
import { Saira_Condensed, Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const saira = Saira_Condensed({
  weight: ['500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-saira',
  display: 'optional',
})

const hanken = Hanken_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'optional',
})

const ibmMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm',
  display: 'optional',
})

export const metadata: Metadata = {
  title: 'Phoenix Rising Window Cleaning · Crystal-Clear Views, Phoenix Strong',
  description: 'Premium residential & commercial window cleaning across the Phoenix metro. Insured, certified, streak-free guaranteed.',
  openGraph: {
    title: 'Phoenix Rising Window Cleaning · Crystal-Clear Views, Phoenix Strong',
    description: 'Premium residential & commercial window cleaning across the Phoenix metro. Insured, certified, streak-free guaranteed.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${saira.variable} ${hanken.variable} ${ibmMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/assets/logo-mark.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
