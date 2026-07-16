const ciclo = [
  {
    titulo: 'Pensamentos',
    descricao: 'Identificamos os pensamentos automáticos que alimentam a ansiedade — muitas vezes distorcidos ou exagerados.',
  },
  {
    titulo: 'Emoções',
    descricao: 'Entendemos como esses pensamentos geram emoções como medo, angústia e a sensação constante de alerta.',
  },
  {
    titulo: 'Comportamentos',
    descricao: 'Trabalhamos as reações e evitações que mantêm o ciclo da ansiedade ativo no seu dia a dia.',
  },
]

const beneficios = [
  'Estruturada, com início, meio e objetivos claros',
  'Baseada em décadas de evidência científica',
  'Focada no presente e em ferramentas práticas',
  'Resultados percebidos em prazos mais curtos',
]

export default function SobreTCC() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
            Minha abordagem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 max-w-2xl mx-auto" style={{ color: '#6B4530' }}>
            O que é a{' '}
            <span style={{ color: '#C17845' }}>Terapia Cognitiva Comportamental</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A TCC é a abordagem com mais evidência científica no tratamento da ansiedade. Ela parte de uma ideia simples: pensamentos, emoções e comportamentos estão conectados — e mudar um deles ajuda a transformar todo o ciclo.
          </p>
        </div>

        {/* Ciclo pensamento-emoção-comportamento */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {ciclo.map((item, i) => (
            <div key={item.titulo} className="relative rounded-2xl p-7 border border-gray-100 shadow-sm" style={{ backgroundColor: '#F3E8DA' }}>
              <div
                className="w-11 h-11 rounded-full font-bold text-sm flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(193,120,69,0.1)', color: '#C17845', border: '1px solid rgba(193,120,69,0.3)' }}
              >
                {i + 1}
              </div>
              <h3 className="text-base font-bold mb-3 leading-snug" style={{ color: '#6B4530' }}>{item.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>

        {/* Por que funciona para ansiedade */}
        <div className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: '#8B5A3C' }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Por que a TCC funciona tão bem para ansiedade
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Em vez de ficar apenas no relato do problema, a TCC te dá ferramentas concretas para identificar gatilhos, questionar pensamentos ansiosos e mudar reações no momento em que elas acontecem.
              </p>
            </div>
            <ul className="space-y-3">
              {beneficios.map(b => (
                <li key={b} className="flex items-center gap-3 text-sm text-gray-200">
                  <span className="w-1.5 h-1.5 rounded-full inline-block shrink-0" style={{ backgroundColor: '#C17845' }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
