import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Background } from '@/components/Background'
import { Logo } from '@/components/Logo'
import { Prose } from '@/components/Prose'
import { SectionProvider } from '@/components/SectionProvider'

// Docs
import { Header } from '@/components/docs/Header'
import { Navigation } from '@/components/docs/Navigation'
import { Feedback, PageNavigation } from '@/components/Footer'

export function Layout({ children, sections = [] }) {
  let router = useRouter()
  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
            <div className="hidden lg:flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-6" />
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            <Background />
            <Prose as="article">{children}</Prose>
          </main>
          <Footer>
            <Feedback key={router.pathname} />
            <PageNavigation />
          </Footer>
        </div>
      </div>
    </SectionProvider>
  )
}
