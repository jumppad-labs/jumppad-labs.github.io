import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Background } from '@/components/Background'

export function Index() {
  return (
    <div className="dark:bg-zinc-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <Header />
      </header>
      <div className="relative isolate pt-14">
        <Background/>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Hero />
            {/* <Features /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}