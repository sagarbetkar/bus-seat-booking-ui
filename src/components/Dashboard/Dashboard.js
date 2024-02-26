import { useContext, useState } from 'react'
import './Dashboard.css'
import { SeatsContext, SeatsDispatchContext } from '../Context/SeatsContext'
import AddBookingDetailsModal from '../AddBookingDetailsModal/AddBookingDetailsModal'

function Dashboard(props) {
  const seats = useContext(SeatsContext)
  const dispatch = useContext(SeatsDispatchContext)
  const [showModal, setShowModal] = useState(false)
  const [selectedRow, setSelectedRow] = useState({})

  const deleteBooking = (e, formData) => {
    e.preventDefault()
    dispatch({
      type: 'deleted',
      formData,
    })
  }

  const saveFormData = (e, formData) => {
    e.preventDefault()
    dispatch({
      type: 'changed',
      formData,
    })
    setShowModal(false)
  }

  return (
    <>
      <h1>Reservation Status</h1>
      <div className='dash-container'>
        {seats.filter((item) => item.isBooked).length ? (
          <table>
            <tbody>
              <tr>
                <th>Seat Number</th>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              {seats
                .filter((item) => item.isBooked)
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.seatNumber}</td>
                    <td>{item.date}</td>
                    <td>
                      {item.user.firstName} {item.user.lastName}
                    </td>
                    <td>{item.user.email}</td>
                    <td>
                      <button
                        type='button'
                        onClick={(e) => {
                          setSelectedRow(item)
                          setShowModal(true)
                        }}
                      >
                        Edit
                      </button>{' '}
                      <button
                        type='button'
                        onClick={(e) => deleteBooking(e, item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <>
            <h4>No Data Found</h4>
          </>
        )}
      </div>
      {showModal && selectedRow && (
        <AddBookingDetailsModal
          isOpen={showModal}
          onSubmit={saveFormData}
          data={[selectedRow]}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default Dashboard
