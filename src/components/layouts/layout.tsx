import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Next.js SSG Blog</title>
        <meta name="description" content="Next.js SSG Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="w-9/12 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout;

