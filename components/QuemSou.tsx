import Image from 'next/image'
import { siteConfig } from '@/config'

const stats = [
  { valor: '9', label: 'Anos de\nexperiência em TCC' },
  { valor: 'Ansiedade', label: 'em Adultos\n(especialidade)' },
  { valor: 'Online\n& Presencial', label: 'Modalidades\nde atendimento' },
]

const certificacoes = [
  { icone: '🧠', titulo: 'Especialista em Ansiedade', subtitulo: 'Foco em adultos' },
  { icone: '📋', titulo: 'Especialista TCC', subtitulo: 'Pós-graduação' },
  { icone: '💻', titulo: 'Atendimento Online', subtitulo: 'CFP autorizado' },
  { icone: '🎓', titulo: 'Graduação', subtitulo: '[Instituição]' },
]

export default function QuemSou() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Esquerda — texto */}
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
            Sobre mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug" style={{ color: '#6B4530' }}>
            Olá, sou a{' '}
            <span style={{ color: '#C17845' }}>Miriam Torquato</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Psicóloga clínica especialista em ansiedade em adultos, com 9 anos de experiência em Terapia Cognitiva Comportamental (TCC). Acredito que cada pessoa carrega uma história única — e que a terapia é um espaço para compreender, acolher e transformar essa história.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Meu foco é o público adulto que convive com ansiedade — do dia a dia a quadros mais intensos como TAG, pânico e ansiedade social — sempre com base científica e muito acolhimento.
          </p>

          <blockquote className="pl-5 mb-10" style={{ borderLeft: '4px solid #C17845' }}>
            <p className="text-gray-700 italic text-sm leading-relaxed">
              &ldquo;A terapia não muda o que aconteceu — ela muda a forma como você se relaciona com isso.&rdquo;
            </p>
          </blockquote>

          <div className="grid grid-cols-2 gap-3">
            {certificacoes.map(c => (
              <div key={c.titulo} className="flex items-center gap-3 rounded-xl p-3" style={{ backgroundColor: '#F3E8DA' }}>
                <span className="text-xl">{c.icone}</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: '#6B4530' }}>{c.titulo}</p>
                  <p className="text-xs text-gray-400">{c.subtitulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direita — foto + stats */}
        <div>
          <div className="w-full aspect-[4/5] rounded-2xl border border-gray-200 overflow-hidden relative mb-6" style={{ backgroundColor: '#F3E8DA' }}>
            <Image
              src="/miriam/miriam-sobre.jpg"
              alt={siteConfig.psicologa.nome}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {stats.map(s => (
              <div key={s.valor} className="text-center p-4 rounded-xl text-white" style={{ backgroundColor: '#8B5A3C' }}>
                <p className="text-base font-bold leading-tight whitespace-pre-line" style={{ color: '#C17845' }}>{s.valor}</p>
                <p className="text-xs text-gray-300 mt-1 leading-snug whitespace-pre-line">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
