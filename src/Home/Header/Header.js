import { NavLink } from 'react-router-dom'
import './Header.css'

function Header(props) {
  return (
    <header className='topnav'>
      <div>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
          to='/'
        >
          Dashboard
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
          to='/reservation'
        >
          Reservation
        </NavLink>
      </div>
    </header>
  )
}

export default Header
