import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import * as Fathom from 'fathom-client';

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

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('UIDSVFCJ', {
      includedDomains: ['jumppad.dev'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };

  }, [router.events]);

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
