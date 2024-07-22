import Head from 'next/head'
import {  useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

// Website
import { Index } from '@/components/Index'

// Docs
import * as mdxComponents from '@/components/mdx'
import { Layout as Docs } from '@/components/docs/Layout'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  let router = useRouter()

  return (
    <>
      <Head>
        {router.pathname === '/' ? (
          <title>Jumppad</title>
        ) : (
          <title>{`${pageProps.title} - Jumppad`}</title>
        )}
        <meta name="description" content={pageProps.description} />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="6ea0771b-a94e-4958-acdf-b99bca18157d"></script>
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
