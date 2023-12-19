import { Layout } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
} from 'framer-motion'
import '@styles/globals.css'
import { GlobalProvider } from 'Context/Context'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import AuthProvider from 'Context/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <GlobalProvider>
            <AuthProvider>
              <ManagedUIContext>
                <Head>
                  <title>Hola Home</title>
                </Head>
                <motion.div className="max-w-screen overflow-hidden">
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </motion.div>
              </ManagedUIContext>
            </AuthProvider>
          </GlobalProvider>
        </SessionProvider>
      </QueryClientProvider>
    </AnimatePresence>
  )
}
