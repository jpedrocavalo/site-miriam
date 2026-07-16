import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { siteConfig, gerarLinkWhatsApp } from '@/config'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: siteConfig.seo.titulo,
  description: siteConfig.seo.descricao,
  keywords: siteConfig.seo.palavrasChave,
}

const whatsappLink = gerarLinkWhatsApp('Olá, gostaria de agendar uma consulta')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}

        {/* Botão flutuante WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8 fill-white"
          >
            <path d="M16.004 2.667A13.32 13.32 0 0 0 2.667 16c0 2.347.613 4.64 1.776 6.653L2.667 29.333l6.88-1.747A13.267 13.267 0 0 0 16.004 29.333 13.32 13.32 0 0 0 29.333 16 13.32 13.32 0 0 0 16.004 2.667zm0 2.133a11.187 11.187 0 0 1 11.196 11.2 11.187 11.187 0 0 1-11.196 11.2 11.14 11.14 0 0 1-5.88-1.667l-.413-.253-4.08 1.04 1.08-3.947-.28-.427A11.14 11.14 0 0 1 4.8 16a11.187 11.187 0 0 1 11.204-11.2zm-3.311 5.453c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.24 3.573 5.52 4.867 2.72 1.08 3.28.867 3.867.813.587-.053 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.253-.16.213-.333.24-.64.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.387.48-.573.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.707-1.747-.987-2.387-.253-.587-.52-.52-.72-.52z" />
          </svg>
        </a>
      </body>
    </html>
  )
}
