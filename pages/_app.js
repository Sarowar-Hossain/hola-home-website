import { Layout } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
} from 'framer-motion'
import '@styles/globals.css'
import { AppProvider } from 'Context/Context'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <SessionProvider>
        <AppProvider>
          <ManagedUIContext>
            <motion.div className="max-w-screen overflow-hidden">
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </motion.div>
          </ManagedUIContext>
        </AppProvider>
      </SessionProvider>
    </AnimatePresence>
  )
}
