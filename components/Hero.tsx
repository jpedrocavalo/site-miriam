import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, gerarLinkWhatsApp } from '@/config'

const WA = gerarLinkWhatsApp('Olá, gostaria de agendar uma consulta')

export default function Hero() {
  return (
    <section style={{ backgroundColor: '#8B5A3C' }} className="min-h-[88vh] flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 border"
            style={{ color: '#C17845', borderColor: 'rgba(193,120,69,0.4)' }}
          >
            Especialista em Ansiedade em Adultos
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Ansiedade não<br />
            precisa ser sua<br />
            {' '}<span className="italic" style={{ color: '#C17845' }}>rotina.</span>
          </h1>

          <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-md">
            Psicóloga clínica especialista no tratamento de ansiedade em adultos, com base em Terapia Cognitiva Comportamental. Atendimento presencial e online para todo o Brasil, com acolhimento e evidências científicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-semibold px-7 py-3.5 rounded-lg transition hover:opacity-90 text-center"
              style={{ backgroundColor: '#C17845' }}
            >
              Comece agora
            </a>
            <Link
              href="/sobre"
              className="inline-block border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition text-center"
            >
              Saiba mais
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
            {siteConfig.badgesHero.map(b => (
              <span key={b} className="inline-flex items-center gap-2 text-xs text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: '#C17845' }} />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Foto */}
        <div className="relative flex justify-center">
          {/* Círculo decorativo atrás */}
          <div
            className="absolute -top-8 -right-8 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ backgroundColor: '#C17845' }}
          />
          <div
            className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden relative z-10"
            style={{ backgroundColor: '#5A4232', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Image
              src="/miriam/miriam-hero.jpg"
              alt={siteConfig.psicologa.nome}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
