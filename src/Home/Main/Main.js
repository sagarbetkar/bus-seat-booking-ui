import { useState } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import Reservation from '../../components/Reservation/Reservation'
import { Routes, Route } from 'react-router-dom'

function Main(props) {
  const [reservationData, setReservationData] = useState(props.data)

  return (
    <div
      style={{
        minHeight: '640px',
        height: '100%',
        marginBottom: '30px',
      }}
    >
      <Routes>
        <Route
          path='/'
          element={
            <Dashboard
              data={reservationData}
              updateData={(data) => setReservationData(data)}
            />
          }
        />
        <Route
          path='/reservation'
          element={
            <Reservation
              data={reservationData}
              updateData={(data) => setReservationData(data)}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default Main
