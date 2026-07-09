import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://treignac-plage.fr'),
  title: 'Treignac Plage Restaurant | Lac des Bariousses',
  description:
    "Restaurant de plage à Treignac, au bord du lac des Bariousses : cuisine française raffinée, terrasse, pauses gourmandes et esprit vacances en Corrèze. Anciennement le Barriou's.",
  openGraph: {
    title: 'Treignac Plage Restaurant',
    description:
      'Cuisine française raffinée au bord du lac des Bariousses à Treignac. Une table simple et solaire, entre baignade, terrasse et nature corrézienne.',
    images: ['/logo.jpg']
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
