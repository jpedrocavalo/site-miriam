'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig, gerarLinkWhatsApp } from '@/config'

const links = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre', href: '/sobre' },
]

const WA = gerarLinkWhatsApp('Olá, gostaria de agendar uma consulta')

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-base font-bold" style={{ color: '#6B4530' }}>{siteConfig.psicologa.nome}</span>
          <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#C17845' }}>Foco em Ansiedade</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-gray-500 hover:text-gray-900 font-medium transition">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition hover:opacity-90"
          style={{ backgroundColor: '#C17845' }}
        >
          Agendar Consulta
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5" aria-label="Menu">
          <span className="w-6 h-0.5 bg-gray-800 block" />
          <span className="w-6 h-0.5 bg-gray-800 block" />
          <span className="w-6 h-0.5 bg-gray-800 block" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-700 font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
            style={{ backgroundColor: '#C17845' }}>
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  )
}
