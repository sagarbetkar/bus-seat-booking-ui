import Dashboard from '../../components/Dashboard/Dashboard'
import Reservation from '../../components/Reservation/Reservation'
import { Routes, Route } from 'react-router-dom'

function Main() {
  return (
    <div
      style={{
        minHeight: '640px',
        height: '100%',
        marginBottom: '30px',
      }}
    >
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>
    </div>
  )
}

export default Main
