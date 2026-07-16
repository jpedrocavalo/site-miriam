const cards = [
  {
    titulo: 'A ansiedade atrapalha o seu sono',
    descricao: 'Mente acelerada na hora de dormir, dificuldade em desligar o pensamento e noites maldormidas por preocupação.',
  },
  {
    titulo: 'A ansiedade afeta seu desempenho no trabalho',
    descricao: 'Dificuldade de concentração, procrastinação por ansiedade e medo constante de errar ou não dar conta.',
  },
  {
    titulo: 'A ansiedade interfere nos seus relacionamentos',
    descricao: 'Irritabilidade, necessidade excessiva de controle ou afastamento de pessoas próximas por conta da tensão constante.',
  },
  {
    titulo: 'Preocupação constante com o futuro',
    descricao: 'Antecipar cenários negativos, dificuldade em viver o presente e sensação de que algo ruim vai acontecer.',
  },
  {
    titulo: 'Sintomas físicos sem explicação médica',
    descricao: 'Tensão muscular, taquicardia, falta de ar ou enjoo que exames não explicam, mas a ansiedade sim.',
  },
  {
    titulo: 'Quando um médico ou psiquiatra indica acompanhamento',
    descricao: 'Encaminhamentos de outros profissionais de saúde para tratamento psicológico em conjunto.',
  },
]

export default function QuandoBuscar() {
  return (
    <section style={{ backgroundColor: '#F3E8DA' }} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
            Ansiedade em Adultos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5 max-w-3xl mx-auto" style={{ color: '#6B4530' }}>
            Quando a ansiedade pede{' '}
            <span style={{ color: '#C17845' }}>apoio profissional</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Nem sempre é simples perceber sozinho o quanto a ansiedade está pesando na vida adulta. Um olhar especializado ajuda a organizar o que parece confuso e a orientar os próximos passos com mais segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {cards.map((card) => (
            <div
              key={card.titulo}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="w-8 h-1 rounded-full mb-5" style={{ backgroundColor: '#C17845' }} />
              <h3 className="text-sm font-bold mb-3 leading-snug" style={{ color: '#6B4530' }}>{card.titulo}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{card.descricao}</p>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto border border-gray-200 rounded-xl py-6 px-8 text-center bg-white">
          <p className="text-gray-700 italic text-sm leading-relaxed">
            Cuidar da saúde mental não é fraqueza — é responsabilidade.
          </p>
        </div>

      </div>
    </section>
  )
}
