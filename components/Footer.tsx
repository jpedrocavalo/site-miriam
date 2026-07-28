import Link from 'next/link'
import { siteConfig } from '@/config'

export default function Footer() {
  const { psicologa, contato, redesSociais, atendimento } = siteConfig

  return (
    <footer style={{ backgroundColor: '#EDD9BC', color: '#8A6A52' }} className="py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-8">

        <div>
          <Link href="/" className="text-lg font-bold block mb-2" style={{ color: '#6B4530' }}>
            {psicologa.nome}
          </Link>
          <p className="text-sm max-w-xs leading-relaxed mb-4">
            {psicologa.biografia}. Atendimento presencial e online para todo o Brasil.
          </p>
          <p className="text-xs leading-relaxed" style={{ color: '#A38B72' }}>
            Atendimento {atendimento.dias.toLowerCase()}, {atendimento.horario}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12">
          <div>
            <h3 className="font-semibold mb-3 text-sm" style={{ color: '#6B4530' }}>Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:opacity-70 transition">Início</Link></li>
              <li><Link href="/sobre" className="hover:opacity-70 transition">Sobre</Link></li>
              <li><Link href="/servicos" className="hover:opacity-70 transition">Serviços</Link></li>
              <li><Link href="#contato" className="hover:opacity-70 transition">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm" style={{ color: '#6B4530' }}>Contato</h3>
            <ul className="space-y-2 text-sm">
              <li><a href={`https://wa.me/${contato.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">{contato.telefone}</a></li>
              <li><a href={redesSociais.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">@psi_miriamtorquato</a></li>
              <li style={{ color: '#A38B72' }}>{contato.cidade}/{contato.estado} — {contato.pais}</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="pt-6 flex justify-center text-xs" style={{ borderTop: '1px solid rgba(107,69,48,0.15)', color: '#A38B72' }}>
        <p>© {new Date().getFullYear()} {psicologa.nome}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
