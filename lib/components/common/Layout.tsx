import React from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: React.ReactChildren
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='container mx-auto w-full lg:w-10/12'>
      <Header />
      <div className='flex flex-col justify-start py-2 px-2'>{children}</div>
      <Footer />
    </div>
  )
}
