import { gerarLinkWhatsApp } from '@/config'

const passos = [
  {
    numero: '01',
    titulo: 'Contato Inicial',
    descricao: 'Você entra em contato pelo WhatsApp e conversamos brevemente sobre o que está buscando. Sem compromisso.',
  },
  {
    numero: '02',
    titulo: 'Sessão Experimental',
    descricao: 'Realizamos uma primeira sessão para nos conhecermos e verificar se a abordagem faz sentido para você.',
  },
  {
    numero: '03',
    titulo: 'Início do Processo',
    descricao: 'Definimos juntos os objetivos terapêuticos, a frequência das sessões e o plano de trabalho personalizado.',
  },
  {
    numero: '04',
    titulo: 'Acompanhamento',
    descricao: 'Sessões semanais ou quinzenais com evolução contínua. Você nunca estará sozinho nesse processo.',
  },
]

const WA = gerarLinkWhatsApp('Olá, gostaria de começar minha terapia')

export default function ComoFunciona() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Esquerda */}
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug" style={{ color: '#6B4530' }}>
            Como funciona o<br />tratamento de ansiedade
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Dar o primeiro passo pode parecer difícil, ainda mais quando a própria ansiedade está no caminho. Por isso, todo o processo foi pensado para ser simples, acolhedor e no seu ritmo.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-semibold px-7 py-3.5 rounded-lg transition hover:opacity-90"
            style={{ backgroundColor: '#C17845' }}
          >
            Quero começar
          </a>
        </div>

        {/* Direita — passos */}
        <div className="space-y-0">
          {passos.map((passo, i) => (
            <div key={passo.numero} className="flex gap-5 items-start py-5" style={{ borderBottom: i < passos.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
              <div
                className="flex-shrink-0 w-11 h-11 rounded-full font-bold text-sm flex items-center justify-center"
                style={{ backgroundColor: 'rgba(193,120,69,0.1)', color: '#C17845', border: '1px solid rgba(193,120,69,0.3)' }}
              >
                {passo.numero}
              </div>
              <div>
                <h3 className="font-bold mb-1" style={{ color: '#6B4530' }}>{passo.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{passo.descricao}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
