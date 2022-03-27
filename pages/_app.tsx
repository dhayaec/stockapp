import React from 'react'
import Layout from '../lib/components/common/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
