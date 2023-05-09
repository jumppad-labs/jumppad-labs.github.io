import { WordSwitcher } from "@/components/WordSwitcher"

export function Hero() {
  return (
    <>
      <div className="mx-auto max-w-3xl text-left">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-6xl">
          Your <WordSwitcher words={["development", "testing", "training", "demo"]} /><br/>environments simplified.
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Jumppad enables the creation and configuration of lightweight, reproducible, and portable environments as code.
        </p>
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <a
            href="/docs/introduction/installation"
            className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            Get started
          </a>
          <a href="/docs/cli/overview" className="text-sm font-semibold leading-6 text-zinc-600 dark:text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <img
        src="/jumppad_screenshot.png"
        alt="Screenshot"
        width={2432}
        height={1442}
        className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
      />
    </>
          
  )
}