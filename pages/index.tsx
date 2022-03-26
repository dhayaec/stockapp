import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Gain from '../lib/components/Gain'
import NoLossBuy from '../lib/components/NoLossBuy'
import Target from '../lib/components/Target'

const Home: NextPage = () => {
  const onClick = () => {
    console.log('Clicked')
  }

  const onWelcome = () => {
    console.log('onWelcome')
  }

  return (
    <div>
      <Head>
        <title>Stock App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-center'>
        <Target name='Target / Stop Loss' />
        <Gain name='Gain / Loss' />
        <NoLossBuy name="Day's Range" />
      </div>
    </div>
  )
}

export default Home
