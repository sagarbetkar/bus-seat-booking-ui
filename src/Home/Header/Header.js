import { PATH } from '../../config/path.config.js'
import './Header.css';

function Header(props) {

  return (
      <header className="topnav">
        <button onClick={() => props.setLink(PATH.DASH)}>Dashboard</button>
        <button onClick={() => props.setLink(PATH.RESV)}>Reservation</button>
      </header>
  )
}

export default Header