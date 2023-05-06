import '@/styles/globals.css'
import { ThemeProvider } from "next-themes"
import { Plus_Jakarta_Sans } from 'next/font/google'
import Layout from '@/components/layout'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <div className={plus_jakarta_sans.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </>
  )
}
