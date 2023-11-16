import { Layout } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import '@styles/globals.css'
import { AppProvider } from 'Context/Context'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <AppProvider>
        <ManagedUIContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ManagedUIContext>
      </AppProvider>
    </SessionProvider>
  )
}
