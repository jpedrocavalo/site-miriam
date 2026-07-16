'use client'

import { useState } from 'react'
import { siteConfig } from '@/config'

interface Review {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
}

const reviews: Review[] = [
  {
    author_name: 'Paciente A',
    rating: 5,
    text: 'Atendimento incrível. Me sinto muito acolhida e amparada em cada sessão. Miriam tem uma escuta muito sensível e me ajudou a entender coisas que eu carregava há anos.',
    relative_time_description: 'há 2 meses',
  },
  {
    author_name: 'Paciente B',
    rating: 5,
    text: 'Profissional excepcional. A terapia online funcionou muito bem para mim — mesma qualidade de uma sessão presencial. Super recomendo!',
    relative_time_description: 'há 3 meses',
  },
  {
    author_name: 'Paciente C',
    rating: 5,
    text: 'Graças ao trabalho da Miriam, consegui finalmente entender meus padrões e criar uma relação mais gentil comigo mesma. Minha vida mudou.',
    relative_time_description: 'há 1 mês',
  },
]

const overallRating = siteConfig.avaliacaoGoogle.nota
const totalRatings = siteConfig.avaliacaoGoogle.total
const CHAR_LIMIT = 200

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function AvatarInitials({ name }: { name: string }) {
  const parts = name.split(' ').filter(n => n.length > 2 && n[0] === n[0].toUpperCase())
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  const initials = (first + last).toUpperCase()

  return (
    <div
      className="w-10 h-10 rounded-full font-bold text-sm flex items-center justify-center shrink-0"
      style={{ backgroundColor: 'rgba(193,120,69,0.12)', color: '#A35F34' }}
    >
      {initials}
    </div>
  )
}

const GoogleLogo = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > CHAR_LIMIT

  return (
    <div style={{ backgroundColor: '#F3E8DA' }} className="rounded-2xl p-6 flex flex-col gap-4 border border-gray-100">
      <div className="flex items-center gap-3">
        <AvatarInitials name={review.author_name} />
        <p className="text-xs text-gray-400">{review.relative_time_description}</p>
        <GoogleLogo className="w-4 h-4 ml-auto shrink-0" />
      </div>

      <StarRating rating={review.rating} />

      <div className="flex-1">
        <p className={`text-sm text-gray-600 leading-relaxed ${!expanded && isLong ? 'line-clamp-4' : ''}`}>
          &ldquo;{review.text}&rdquo;
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-xs font-semibold hover:opacity-70 transition"
            style={{ color: '#C17845' }}
          >
            {expanded ? 'Ler menos ↑' : 'Ler mais ↓'}
          </button>
        )}
      </div>
    </div>
  )
}

export default function Depoimentos() {
  return (
    <section className="bg-white pt-10 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C17845' }}>
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#6B4530' }}>
            O que dizem os pacientes
          </h2>

          {totalRatings > 0 && (
            <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 shadow-sm">
              <GoogleLogo className="w-7 h-7 shrink-0" />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">{overallRating.toFixed(1)}</span>
                  <StarRating rating={Math.round(overallRating)} />
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{totalRatings} avaliações no Google</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>

      </div>
    </section>
  )
}
