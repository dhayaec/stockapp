import Head from 'next/head'

interface MetaHeaderProps {
  title: string
}

export default function MetaHeader({ title = 'CMS BASE' }: MetaHeaderProps) {
  const theme = '#4a90e2'
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      {/* link manifest.json  */}
      <link rel='manifest' href='/manifest.json' />
      {/* this sets the color of url bar */}
      <meta name='theme-color' content='#ffffff' />
      {/* this sets logo in Apple smatphones.  */}
      <link rel='apple-touch-icon' href='/icon-192x192.png' />
      {/* this sets the color of url bar in Apple smatphones  */}
      <meta name='apple-mobile-web-app-status-bar' content={theme} />
      <meta name='viewport' content='user-scalable=no, width=device-width' />
    </Head>
  )
}
