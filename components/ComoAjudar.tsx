const tiposDeAnsiedade = [
  {
    titulo: 'Ansiedade Generalizada (TAG)',
    descricao: 'Preocupação excessiva e constante com o futuro, tensão que não passa e dificuldade de relaxar mesmo sem motivo aparente.',
  },
  {
    titulo: 'Síndrome do Pânico',
    descricao: 'Crises repentinas de medo intenso, palpitações, falta de ar e sensação de perigo iminente ou perda de controle.',
  },
  {
    titulo: 'Ansiedade Social',
    descricao: 'Medo de julgamento, vergonha excessiva e evitação de situações sociais, profissionais ou de exposição.',
  },
  {
    titulo: 'TOC',
    descricao: 'Pensamentos intrusivos recorrentes e comportamentos repetitivos usados para tentar aliviar a ansiedade.',
  },
  {
    titulo: 'Ansiedade do dia a dia',
    descricao: 'Tensão constante, mente acelerada e sobrecarga mental que afetam o trabalho, o sono e os relacionamentos na vida adulta.',
  },
  {
    titulo: 'Ansiedade sem causa aparente',
    descricao: 'Sensação de alerta constante, inquietação ou desconforto físico sem um motivo claro que o justifique.',
  },
]

export default function ComoAjudar() {
  return (
    <section style={{ backgroundColor: '#F3E8DA' }} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
            Minha especialidade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 max-w-2xl mx-auto" style={{ color: '#6B4530' }}>
            Tipos de <span style={{ color: '#C17845' }}>ansiedade em adultos</span> que trabalho
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Sou psicóloga especialista no tratamento de ansiedade na vida adulta. Conheça alguns dos quadros mais comuns que atendo em consultório.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiposDeAnsiedade.map(s => (
            <div
              key={s.titulo}
              className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: '#C17845' }} />
              <h3 className="text-base font-bold mb-3 leading-snug" style={{ color: '#6B4530' }}>{s.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
