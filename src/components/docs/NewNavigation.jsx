import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { navigation } from '@/config/new_navigation'

function ToplevelNavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        'font-semibold pl-2',
        active 
        ? "text-emerald-500"
        : "text-zinc-900 dark:text-white"
      )}
    >
      <span className="truncate">{children}</span>
    </Link>
  )
}

function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 pl-5 text-sm transition',
        'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
      )}
    >
      {active && <motion.div
        layout
        className={clsx(
          "absolute h-6 left-2 w-px",
          "bg-emerald-400"
        )}
      />}
      <span className="truncate">{children}</span>
    </Link>
  )
 
}

function ExpandIcon() {
  return (
    <svg  viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-1 self-center">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  )
}

function NavigationBook({book, className}) {
  let router= useRouter()

  return (
    <li className={clsx('relative mt-6', className)}>
      <h2 className="text-xs flex justify-between content-center border-b pb-2 pl-1 border-zinc-900/5 dark:border-zinc-800 text-zinc-900 dark:text-zinc-500">
        <span>{book.title}</span> <ExpandIcon />
      </h2>
      <div className="relative mt-3 pl-2">
        <ul role="list" className="border-l border-transparent">
          {book.chapters.map((chapter, index) => {
            let isActiveChapter = chapter.pages.findIndex(page => page.uri === router.pathname) !== -1
            let firstPage = chapter.pages[0]
            return (
              <li key={`chapter-${index}`} layout="position" className="relative">
                {chapter.title && 
                  <ToplevelNavLink 
                    active={isActiveChapter} 
                    href={`${firstPage.uri}`}
                  >
                    {chapter.title}
                  </ToplevelNavLink>
                }
                <ul>
                <motion.div
                  layout
                  className={clsx(
                    "absolute top-9 bottom-1 left-2 w-px",
                    "bg-zinc-800/10 dark:bg-white/10"
                  )}
                />
                  {chapter.pages.map((page) => {
                    let active = page.uri === router.pathname
                    return (
                      <li key={page.title}>
                        {chapter.title 
                          ? <NavLink active={active} href={`${page.uri}`}>{page.title}</NavLink>
                          : <ToplevelNavLink active={active} href={`${page.uri}`}>{page.title}</ToplevelNavLink>
                        }              
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}

export function Navigation(props) {
  return (
    <nav {...props}>
      <ul role="list">
        {navigation?.map((book, i) => (
          <NavigationBook
            key={book.title}
            book={book}
            className={i === 0 && 'md:mt-0'}
          />
        ))}
      </ul>
    </nav>
  )
}
