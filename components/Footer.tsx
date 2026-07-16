import Link from 'next/link'
import { siteConfig } from '@/config'

export default function Footer() {
  const { psicologa, contato, redesSociais, atendimento } = siteConfig

  return (
    <footer style={{ backgroundColor: '#8B5A3C' }} className="text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-8">

        <div>
          <Link href="/" className="text-lg font-bold text-white block mb-2">
            {psicologa.nome}
          </Link>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed mb-4">
            {psicologa.biografia}. Atendimento presencial e online para todo o Brasil.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Atendimento {atendimento.dias.toLowerCase()}, {atendimento.horario}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12">
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-white transition">Sobre</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition">Serviços</Link></li>
              <li><Link href="#contato" className="hover:text-white transition">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li><a href={`https://wa.me/${contato.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{contato.telefone}</a></li>
              <li><a href={redesSociais.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">@psi_miriamtorquato</a></li>
              <li className="text-gray-500">{contato.cidade}/{contato.estado} — {contato.pais}</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="pt-6 flex justify-center text-xs text-gray-500" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p>© {new Date().getFullYear()} {psicologa.nome}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
