import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SobreTCC from '@/components/SobreTCC'
import QuandoBuscar from '@/components/QuandoBuscar'
import Depoimentos from '@/components/Depoimentos'
import ComoFunciona from '@/components/ComoFunciona'
import FAQ from '@/components/FAQ'
import VamosConversar from '@/components/VamosConversar'

const temas = [
  {
    titulo: 'Ansiedade em Adultos',
    descricao: 'Minha especialidade. Preocupação excessiva, tensão constante, dificuldade de relaxar e sensação de que algo ruim pode acontecer a qualquer momento.',
  },
  {
    titulo: 'Depressão',
    descricao: 'Tristeza persistente, perda de interesse nas atividades, cansaço emocional e dificuldade em encontrar sentido no dia a dia.',
  },
  {
    titulo: 'Autoestima e autoconhecimento',
    descricao: 'Dificuldade de se valorizar, insegurança constante, autocrítica excessiva e busca por uma relação mais gentil consigo mesmo.',
  },
  {
    titulo: 'Relacionamentos',
    descricao: 'Padrões repetitivos em relacionamentos, dificuldade em estabelecer limites, conflitos recorrentes ou medo de se conectar.',
  },
  {
    titulo: 'Luto e perdas',
    descricao: 'Processar a dor de perdas afetivas, profissionais ou de identidade, encontrando formas de seguir em frente com dignidade.',
  },
  {
    titulo: 'Qualquer sofrimento emocional',
    descricao: 'Às vezes não há um nome para o que sentimos. Se algo está pesando, este é um bom motivo para começar.',
  },
]

const beneficiosOnline = [
  {
    titulo: 'Mesma qualidade do presencial',
    descricao: 'O vínculo terapêutico e a eficácia do atendimento online são equivalentes ao atendimento presencial.',
  },
  {
    titulo: 'Conforto e privacidade',
    descricao: 'Você escolhe o ambiente onde se sente seguro para falar. Sem deslocamentos, no seu tempo.',
  },
  {
    titulo: 'Flexibilidade de horários',
    descricao: 'Maior facilidade para encaixar as sessões na sua rotina, seja em casa, no trabalho ou em qualquer lugar.',
  },
  {
    titulo: 'Acessível de qualquer lugar',
    descricao: 'Mora em outra cidade ou país? O atendimento online permite cuidar da saúde mental sem fronteiras geográficas.',
  },
]

export default function Servicos() {
  return (
    <main>
      <Header />

      <section style={{ backgroundColor: '#F3E8DA' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#D98C5A' }}>
            O que ofereço
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#6B4530' }}>Serviços</h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Atendimento psicológico especialista em ansiedade em adultos, presencial e online.
          </p>
        </div>

        {/* Tratamento de Ansiedade em Adultos */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm mb-8">
          <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: '#D98C5A' }} />
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#6B4530' }}>Tratamento de Ansiedade em Adultos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sessões individuais com escuta qualificada e acolhimento, com foco no tratamento da ansiedade na vida adulta — sem deixar de lado outros temas que estejam pesando, como depressão, autoestima e relacionamentos.
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-10">
            {['Sessões de 50 minutos', 'Presencial ou online', 'Atendimento semanal ou quinzenal', 'Sigilo e ética profissional'].map(d => (
              <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full inline-block shrink-0" style={{ backgroundColor: '#D98C5A' }} />
                {d}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold mb-2" style={{ color: '#6B4530' }}>O que você pode trazer para a terapia</h3>
          <p className="text-gray-500 leading-relaxed mb-8 text-sm">
            Ansiedade é minha especialidade, mas a terapia é um espaço para tudo aquilo que você carrega. Conheça alguns dos temas mais trabalhados nas sessões:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            {temas.map((item) => (
              <div key={item.titulo} className="border-t pt-4" style={{ borderColor: '#e5e7eb' }}>
                <h4 className="text-sm font-bold mb-1" style={{ color: '#6B4530' }}>{item.titulo}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>

          <blockquote className="pl-5" style={{ borderLeft: '4px solid #D98C5A' }}>
            <p className="text-gray-700 italic leading-relaxed text-sm">
              &ldquo;Você não precisa estar em crise para buscar terapia. Cuidar de si é um ato de coragem.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Atendimento Online */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
          <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: '#D98C5A' }} />
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#6B4530' }}>Atendimento Online</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Toda a qualidade da terapia presencial, de onde você estiver. As sessões online são realizadas por videochamada em plataformas seguras e de fácil acesso.
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-10">
            {['Videochamada em plataforma segura', 'Atende todo o Brasil', 'Flexibilidade de horários', 'Mesma qualidade do presencial'].map(d => (
              <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full inline-block shrink-0" style={{ backgroundColor: '#D98C5A' }} />
                {d}
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-2 gap-4">
            {beneficiosOnline.map((item) => (
              <div key={item.titulo} className="rounded-xl p-5" style={{ backgroundColor: '#F3E8DA' }}>
                <h4 className="text-sm font-bold mb-2" style={{ color: '#6B4530' }}>{item.titulo}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SobreTCC />
      <QuandoBuscar />
      <Depoimentos />
      <ComoFunciona />
      <FAQ />
      <VamosConversar />

      <Footer />
    </main>
  )
}
