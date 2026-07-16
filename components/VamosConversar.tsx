import { gerarLinkWhatsApp } from '@/config'

const WA = gerarLinkWhatsApp('Olá, gostaria de agendar uma consulta')

export default function VamosConversar() {
  return (
    <section id="contato" style={{ backgroundColor: '#F3E8DA' }} className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
          Contato
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#6B4530' }}>
          Vamos <span style={{ color: '#C17845' }}>conversar?</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
          Se a ansiedade está pesando na sua rotina de adulto, o primeiro passo não precisa ser perfeito — só precisa acontecer. Entre em contato e vamos encontrar juntos o melhor caminho.
        </p>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-xl transition hover:opacity-90"
          style={{ backgroundColor: '#8B5A3C' }}
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 32 32">
            <path d="M16.004 2.667A13.32 13.32 0 0 0 2.667 16c0 2.347.613 4.64 1.776 6.653L2.667 29.333l6.88-1.747A13.267 13.267 0 0 0 16.004 29.333 13.32 13.32 0 0 0 29.333 16 13.32 13.32 0 0 0 16.004 2.667zm0 2.133a11.187 11.187 0 0 1 11.196 11.2 11.187 11.187 0 0 1-11.196 11.2 11.14 11.14 0 0 1-5.88-1.667l-.413-.253-4.08 1.04 1.08-3.947-.28-.427A11.14 11.14 0 0 1 4.8 16a11.187 11.187 0 0 1 11.204-11.2zm-3.311 5.453c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.24 3.573 5.52 4.867 2.72 1.08 3.28.867 3.867.813.587-.053 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.253-.16.213-.333.24-.64.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.387.48-.573.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.707-1.747-.987-2.387-.253-.587-.52-.52-.72-.52z" />
          </svg>
          → Agendar pelo WhatsApp
        </a>

      </div>
    </section>
  )
}
