import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'

// Website
import { Index } from '@/components/Index'

// Docs
import * as mdxComponents from '@/components/mdx'
import { Layout as Docs } from '@/components/docs/Layout'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {router.pathname === '/' ? (
          <title>Jumppad</title>
        ) : (
          <title>{`${pageProps.title} - Jumppad`}</title>
        )}
        <meta name="description" content={pageProps.description} />
      </Head>
      {router.pathname === '/' ? (
          <Index></Index>
        ) : (
          <MDXProvider components={mdxComponents}>
            <Docs {...pageProps}>
              <Component {...pageProps} />
            </Docs>
          </MDXProvider>
        )}
    </>
  )
}
