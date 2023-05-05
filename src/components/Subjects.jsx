import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

export const subjects = [
  {
    href: '/docs/cli/overview',
    name: 'CLI',
    description: 'Learn how to use the Jumppad CLI.',
  },
  {
    href: '/docs/resources/overview',
    name: 'Resources',
    description: 'Understand how to create Jumppad resources.',
  },
]

export function Subjects({title = "Subjects"}) {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="subjects">
        {title}
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {subjects.map((subject) => (
          <div key={subject.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {subject.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {subject.description}
            </p>
            <p className="mt-4">
              <Button href={subject.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
