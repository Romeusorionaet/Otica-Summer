import type { Metadata } from 'next'
import { Nova_Round } from 'next/font/google'
import '../assets/styles/globals.css'
import '../assets/styles/section-gallery.css'

const NR = Nova_Round({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-NR',
})

export const metadata: Metadata = {
  title: 'Ótica Summer - Óculos de qualidade para todos os estilos',
  description:
    'Encontre os melhores óculos de sol e de grau na Ótica XYZ. Design moderno, alta qualidade e preços acessíveis. Compre agora e veja a diferença!',
  openGraph: {
    title: 'Ótica Summer - Óculos de qualidade para todos os estilos',
    description:
      'Descubra a nossa seleção de óculos na Ótica XYZ. Estilos variados para combinar com sua personalidade. Veja a vida com mais estilo!',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Ótica Summer',
    images: [
      {
        url: 'https://i.postimg.cc/pdXfCf26/logo.png',
        width: 800,
        height: 600,
        alt: 'Ótica Summer - Coleção de óculos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${NR.variable}`}>{children}</body>
    </html>
  )
}
