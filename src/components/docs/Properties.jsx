import clsx from 'clsx'
import Link from 'next/link'

export function Properties({ children }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
      >
        {children}
      </ul>
    </div>
  )
}

export function Property({ name, type, required, value, readonly, children }) {
  if (!value) {
    switch(type) {
      case 'string': 
        value = `""`
        break
      case 'number': 
        value = "0"
        break
      case 'boolean': 
        value = "false"
        break
      default:
        if (type && type.startsWith('[]')) {
          value = "[]"
        }
        if (type && type.startsWith('map[')) {
          value = "map[]{}"
        }
    }
  }

  return (
    <li className="m-0 flex flex-wrap lg:flex-row flex-col justify-between gap-x-4 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code className={clsx(readonly ? "ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400" : "text-emerald-500 dark:text-emerald-400 ring-emerald-300 dark:ring-emerald-400/10 bg-emerald-200/10 text-emerald-500 dark:text-emerald-400")}>{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono pt-1 text-xs text-zinc-400 dark:text-zinc-500">
              {type.startsWith('#') ?
                (<>(<Link href={type}>{type.slice(1)}</Link>: {"{}"})</>)
              :
                <>({type}: {value})</>
              }
            </dd>
            <dt className="sr-only">Required</dt>
            <dd className="font-mono italic pt-1 text-xs text-zinc-400 dark:text-zinc-500">
              {required === 'true' ? 'required' : ''}
            </dd>
            <dt className="sr-only">Readonly</dt>
            <dd className="font-mono italic pt-1 text-xs text-zinc-400 dark:text-zinc-500">
              {readonly ? 'readonly' : ''}
            </dd>
          </>
        )}
      </dl>
      <dl className="m-0  w-[400px] min-w-[340px] lg:max-w-[50%] justify-self-end">
        <dt className="sr-only">Description</dt>
        <dd className=" [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}