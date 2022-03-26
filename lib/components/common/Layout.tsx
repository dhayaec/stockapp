import { useRouter } from 'next/router'
import { menuItems, MenuItemType } from '../../constants/constants'
import Footer from './Footer'
import Header from './Header'
import MetaHeader from './MetaHeader'

export default function Layout({ children }: any) {
  const router = useRouter()
  const item = menuItems.find((i) => i.href === router.pathname) as MenuItemType
  return (
    <div className='container mx-auto w-full lg:w-1/2'>
      <MetaHeader title={item.name} />
      <Header />
      <div className='flex min-h-screen flex-col justify-start py-2 px-2'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
