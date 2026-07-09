import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://treignac-plage.fr'),
  title: 'Treignac Plage Restaurant | Bistrot au lac des Bariousses',
  description:
    'Restaurant de plage à Treignac, au bord du lac des Bariousses : terrasse, pauses gourmandes et esprit vacances en Corrèze.',
  openGraph: {
    title: 'Treignac Plage Restaurant',
    description:
      'Une table simple et solaire au bord du lac des Bariousses, entre baignade, terrasse et nature corrézienne.',
    images: ['/lac-bariousses.jpg']
  }
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
