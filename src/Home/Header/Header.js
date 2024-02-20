import { PATH } from '../../config/path.config.js'
import './Header.css'

function Header(props) {
  return (
    <header className='topnav'>
      <button onClick={() => props.setLink(PATH.DASH)}>Dashboard</button>
      <button onClick={() => props.setLink(PATH.RESV)}>Reservation</button>
      <div class='dropdown'>
        <button class='dropbtn'>
          Dropdown
          <i class='fa fa-caret-down'></i>
        </button>
        <div class='dropdown-content'>
          <button onClick={() => props.setLink(PATH.DASH)}>Dashboard</button>
          <button onClick={() => props.setLink(PATH.RESV)}>Reservation</button>
        </div>
      </div>
    </header>
  )
}

export default Header
