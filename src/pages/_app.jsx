import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

// Website
import { Index } from '@/components/Index'

// Docs
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/docs/MobileNavigation'
import { Layout as Docs } from '@/components/docs/Layout'

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

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
