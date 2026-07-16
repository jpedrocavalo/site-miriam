import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, gerarLinkWhatsApp } from '@/config'

const whatsappLink = gerarLinkWhatsApp('Olá, gostaria de agendar uma consulta')

const pilares = [
  {
    titulo: 'Escuta acolhedora',
    descricao: 'Um espaço sem julgamentos, onde você pode falar do que pesa sem medo de ser julgado ou incompreendido.',
  },
  {
    titulo: 'Abordagem científica',
    descricao: 'Terapia Cognitiva Comportamental especializada em ansiedade, com técnicas validadas e resultados que se sustentam fora do consultório.',
  },
  {
    titulo: 'Ética e sigilo',
    descricao: 'Tudo o que é dito em sessão fica em sessão. Sigilo profissional é compromisso inegociável, do início ao fim.',
  },
]

const comoFaco = [
  {
    numero: '01',
    titulo: 'Escuta ativa',
    descricao: 'Antes de qualquer técnica, escuto. Entender sua história, no seu ritmo, é o primeiro passo de todo processo.',
  },
  {
    numero: '02',
    titulo: 'Avaliação individual',
    descricao: 'Cada pessoa é única. Compreendo o que te trouxe até aqui para construir um caminho que faça sentido pra você.',
  },
  {
    numero: '03',
    titulo: 'Intervenções baseadas em evidências',
    descricao: 'Uso ferramentas da Terapia Cognitiva Comportamental especializadas em ansiedade para transformar pensamentos, emoções e comportamentos.',
  },
  {
    numero: '04',
    titulo: 'Acompanhamento colaborativo',
    descricao: 'Terapia é construção conjunta. Revemos o processo continuamente, ajustando o que for preciso no seu tempo.',
  },
]

export default function Sobre() {
  return (
    <main>
      <Header />

      {/* Hero da página Sobre */}
      <section style={{ backgroundColor: '#F3E8DA' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
              style={{ color: '#A35F34', backgroundColor: 'rgba(193,120,69,0.12)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: '#C17845' }} />
              Sobre mim
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#6B4530' }}>
              {siteConfig.psicologa.nome}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              {siteConfig.psicologa.biografia}. Acredito que cada pessoa carrega uma história única — e que a terapia é um espaço para compreender, acolher e transformar essa história.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Minha especialidade é o tratamento de ansiedade em adultos. Atendo de forma presencial e online, oferecendo um ambiente seguro, sem julgamentos, onde você pode se expressar livremente e encontrar caminhos reais para o que está vivendo.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-semibold px-7 py-3.5 rounded-lg transition hover:opacity-90"
              style={{ backgroundColor: '#C17845' }}
            >
              Agendar consulta →
            </a>
          </div>

          <div
            className="w-full aspect-[4/5] rounded-2xl border border-gray-200 overflow-hidden relative"
            style={{ backgroundColor: '#ffffff' }}
          >
            <Image
              src="/miriam/miriam-sobre-pagina.jpg"
              alt={siteConfig.psicologa.nome}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* O que me motiva */}
      <section style={{ backgroundColor: '#8B5A3C' }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
            O que me motiva
          </span>
          <p className="text-2xl md:text-3xl text-white leading-snug font-medium">
            Escolhi me especializar em ansiedade porque vi de perto o quanto ela pode limitar a vida adulta de alguém em silêncio. Ver uma pessoa sair de um lugar de alerta constante para um lugar de clareza e leveza é o que me move todos os dias.
          </p>
          <p className="text-gray-300 leading-relaxed mt-6">
            Cuidar de você não é fraqueza — é o começo de tudo.
          </p>
        </div>
      </section>

      {/* O que me guia */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
              O que me guia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#6B4530' }}>
              Os pilares do meu trabalho
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pilares.map(p => (
              <div key={p.titulo} className="rounded-2xl p-7 border border-gray-100 shadow-sm" style={{ backgroundColor: '#F3E8DA' }}>
                <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: '#C17845' }} />
                <h3 className="text-base font-bold mb-3 leading-snug" style={{ color: '#6B4530' }}>{p.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como eu faço */}
      <section style={{ backgroundColor: '#F3E8DA' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
              Como eu faço
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#6B4530' }}>
              Meu método de trabalho
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {comoFaco.map(c => (
              <div key={c.numero} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex gap-5 items-start">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full font-bold text-sm flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(193,120,69,0.1)', color: '#C17845', border: '1px solid rgba(193,120,69,0.3)' }}
                >
                  {c.numero}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#6B4530' }}>{c.titulo}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#F3E8DA' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B4530' }}>Pronta para começar?</h2>
          <p className="text-gray-500 mb-8">Entre em contato e agende sua primeira sessão.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-8 py-3.5 rounded-lg font-semibold transition hover:opacity-90"
              style={{ backgroundColor: '#C17845' }}
            >
              Falar pelo WhatsApp →
            </a>
            <Link
              href="/servicos"
              className="px-8 py-3.5 rounded-lg font-semibold border transition hover:bg-white"
              style={{ borderColor: '#6B4530', color: '#6B4530' }}
            >
              Ver serviços
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
