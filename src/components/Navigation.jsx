import Link from 'next/link'

export function Navigation({navigation}) {
  return (
    <nav className="hidden md:block">
      <ul role="list" className="flex items-center gap-8">
        {navigation.map(item => {
          return (<TopLevelNavItem key={item.name} href={item.href}>{item.name}</TopLevelNavItem>)
        })}
      </ul>
    </nav>
  )
}

export function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}