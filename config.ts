// Configurações do Site — Miriam Torquato

export const siteConfig = {
  psicologa: {
    nome: 'Miriam Torquato',
    formacao: 'Formação em Psicologia Clínica',
    especialidade: 'Especialista em Ansiedade em Adultos',
    especializacoes: ['Ansiedade em Adultos', 'Terapia Individual', 'Atendimento Online'],
    biografia: 'Psicóloga clínica especialista em ansiedade em adultos',
  },

  contato: {
    whatsapp: '5584991546438', // Sem espaços, + ou traços
    telefone: '(84) 99154-6438',
    cidade: 'Natal',
    estado: 'RN',
    pais: 'Brasil',
  },

  redesSociais: {
    instagram: 'https://instagram.com/psi_miriamtorquato',
    facebook: 'https://facebook.com/[seu-perfil]',
  },

  atendimento: {
    dias: 'Segunda a sexta',
    horario: '8h às 18h',
  },

  seo: {
    titulo: 'Miriam Torquato — Psicóloga Especialista em Ansiedade em Adultos',
    descricao: 'Psicóloga especialista em ansiedade em adultos. Atendimento individual, presencial e online, com Terapia Cognitiva Comportamental, acolhimento e ciência.',
    palavrasChave: [
      'psicóloga especialista em ansiedade',
      'ansiedade em adultos',
      'tratamento para ansiedade',
      'terapia para ansiedade',
      'psicóloga para adultos',
      'terapia individual',
      'atendimento online',
      'saúde mental',
    ],
  },

  servicos: [
    {
      titulo: 'Tratamento de Ansiedade em Adultos',
      descricao: 'Sessões individuais focadas na compreensão e no manejo da ansiedade na vida adulta, com base em evidências.',
      emoji: '🛋️',
    },
    {
      titulo: 'Atendimento Online',
      descricao: 'Sessões por videochamada com a mesma qualidade do presencial, de onde você estiver.',
      emoji: '💻',
    },
  ],

  badgesHero: ['Especialista em Ansiedade em Adultos', 'Terapia Cognitiva Comportamental', 'Presencial e Online'],

  avaliacaoGoogle: {
    nota: 5.0,
    total: 0, // atualizar quando houver avaliações reais no Google
  },

  faq: [
    {
      pergunta: 'Você atende só ansiedade ou outras questões também?',
      resposta: 'Minha especialidade é o tratamento de ansiedade em adultos — do dia a dia a quadros mais intensos como TAG, pânico e ansiedade social. É nisso que tenho mais profundidade técnica e resultado.',
    },
    {
      pergunta: 'A partir de que idade você atende?',
      resposta: 'Atendo exclusivamente o público adulto. Se você está buscando atendimento para crianças ou adolescentes, posso te indicar outros profissionais.',
    },
    {
      pergunta: 'Quanto tempo dura cada sessão?',
      resposta: 'As sessões têm duração de 50 minutos, com frequência semanal ou quinzenal, definida junto com você conforme sua necessidade.',
    },
    {
      pergunta: 'O atendimento online funciona mesmo?',
      resposta: 'Sim. A terapia online tem a mesma eficácia da presencial, desde que feita em um ambiente reservado e com conexão estável. Atendo todo o Brasil por videochamada.',
    },
    {
      pergunta: 'Como funciona o sigilo das sessões?',
      resposta: 'Tudo o que é conversado em sessão é protegido pelo Código de Ética da Psicologia. Sigilo profissional é um compromisso inegociável.',
    },
    {
      pergunta: 'Como faço para agendar minha primeira consulta?',
      resposta: 'É só chamar no WhatsApp. Conversamos rapidamente sobre o que você está buscando e já encontramos um horário para a primeira sessão.',
    },
    {
      pergunta: 'Vocês atendem convênio?',
      resposta: '[Informar se há atendimento por convênio ou apenas particular, com opção de recibo para reembolso].',
    },
  ],
}

export const gerarLinkWhatsApp = (mensagem?: string) => {
  const numero = siteConfig.contato.whatsapp
  const msg = mensagem || 'Olá, gostaria de agendar uma consulta'
  return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`
}
