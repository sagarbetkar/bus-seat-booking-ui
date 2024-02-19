import { useState } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import Reservation from '../../components/Reservation/Reservation'
import { PATH } from '../../config/path.config.js'

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
      {props.path === PATH.DASH && (
        <Dashboard
          data={reservationData}
          updateData={(data) => setReservationData(data)}
        />
      )}
      {props.path === PATH.RESV && (
        <Reservation
          data={reservationData}
          updateData={(data) => setReservationData(data)}
        />
      )}
    </div>
  )
}

export default Main
