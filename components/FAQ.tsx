'use client'

import { useState } from 'react'
import { siteConfig } from '@/config'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#D98C5A' }}>
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#6B4530' }}>
            Perguntas <span style={{ color: '#D98C5A' }}>frequentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {siteConfig.faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.pergunta}
                className="rounded-xl border border-gray-100 overflow-hidden"
                style={{ backgroundColor: '#F3E8DA' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm" style={{ color: '#6B4530' }}>{item.pergunta}</span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-transform"
                    style={{
                      backgroundColor: 'rgba(217,140,90,0.12)',
                      color: '#D98C5A',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{item.resposta}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
