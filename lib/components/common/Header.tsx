import { menuItems } from '../../constants/constants'
import { NavLink } from '../../utils/NavLink'

export default function header() {
  return (
    <header>
      <ul className='flex flex-row justify-center'>
        {menuItems.map((i) => {
          return (
            <li key={i.id} className='m-2 text-blue-500 hover:text-blue-800'>
              <NavLink href={i.href} replace={i.href === '/'}>
                <a className='cursor-pointer rounded-md py-2 px-4'>{i.name}</a>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
