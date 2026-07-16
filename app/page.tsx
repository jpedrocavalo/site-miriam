import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuemSou from '@/components/QuemSou'
import ComoAjudar from '@/components/ComoAjudar'
import SobreTCC from '@/components/SobreTCC'
import QuandoBuscar from '@/components/QuandoBuscar'
import Depoimentos from '@/components/Depoimentos'
import ComoFunciona from '@/components/ComoFunciona'
import FAQ from '@/components/FAQ'
import VamosConversar from '@/components/VamosConversar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <QuemSou />
      <ComoAjudar />
      <Depoimentos />
      <SobreTCC />
      <QuandoBuscar />
      <ComoFunciona />
      <FAQ />
      <VamosConversar />
      <Footer />
    </main>
  )
}
