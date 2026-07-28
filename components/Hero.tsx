import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, gerarLinkWhatsApp } from '@/config'

const WA = gerarLinkWhatsApp('Olá, gostaria de agendar uma consulta')

export default function Hero() {
  return (
    <section style={{ backgroundColor: '#EDD9BC' }} className="min-h-[88vh] flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 border"
            style={{ color: '#D98C5A', borderColor: 'rgba(217,140,90,0.4)' }}
          >
            Especialista em Ansiedade em Adultos
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#6B4530' }}>
            Ansiedade não<br />
            precisa ser sua<br />
            {' '}<span className="italic" style={{ color: '#D98C5A' }}>rotina.</span>
          </h1>

          <p className="text-base leading-relaxed mb-10 max-w-md" style={{ color: '#8A6A52' }}>
            Psicóloga clínica especialista no tratamento de ansiedade em adultos, com base em Terapia Cognitiva Comportamental. Atendimento presencial e online para todo o Brasil, com acolhimento e evidências científicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold px-7 py-3.5 rounded-lg transition hover:opacity-90 text-center"
              style={{ backgroundColor: '#D98C5A', color: '#3E2B22' }}
            >
              Comece agora
            </a>
            <Link
              href="/sobre"
              className="inline-block border font-semibold px-7 py-3.5 rounded-lg hover:bg-white/50 transition text-center"
              style={{ borderColor: 'rgba(107,69,48,0.3)', color: '#6B4530' }}
            >
              Saiba mais
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
            {siteConfig.badgesHero.map(b => (
              <span key={b} className="inline-flex items-center gap-2 text-xs" style={{ color: '#8A6A52' }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: '#D98C5A' }} />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Foto */}
        <div className="relative flex justify-center">
          {/* Círculo decorativo atrás */}
          <div
            className="absolute -top-8 -right-8 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{ backgroundColor: '#D98C5A' }}
          />
          <div
            className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden relative z-10"
            style={{ backgroundColor: '#D9C3A6', border: '1px solid rgba(107,69,48,0.12)' }}
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
