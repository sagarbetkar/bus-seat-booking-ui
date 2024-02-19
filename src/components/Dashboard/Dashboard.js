import { useState } from 'react'
import './Dashboard.css'
import EditBookingDetailsModal from '../EditBookingDetailsModal/EditBookingDetailsModal'

function Dashboard(props) {
  const [data, setData] = useState(props.data)
  const [showModal, setShowModal] = useState(false)
  const [selectedRow, setSelectedRow] = useState({})

  const deleteBooking = (e, dataItem) => {
    e.preventDefault()
    const updateItem = {
      ...dataItem,
      user: {
        firstName: '',
        lastName: '',
        email: '',
      },
      isBooked: false,
      isSelected: false,
      date: null,
    }
    const filteredData = data.filter((item) => item.id !== dataItem.id)
    filteredData.push(updateItem)
    filteredData.sort((a, b) => a.id - b.id)
    setData(filteredData)
    props.updateData(filteredData)
  }

  const saveFormData = (e, formData) => {
    e.preventDefault()
    const date = new Date()
    const updatedData = formData.map((item) => {
      const itemObj = {
        ...item,
      }
      if (item.isSelected) {
        itemObj.isBooked = true
        itemObj.date = date.toLocaleDateString()
      }
      return itemObj
    })
    setData(updatedData)
    props.updateData(updatedData)
    setShowModal(false)
  }

  return (
    <>
      <h1>Reservation Status</h1>
      <div className='dash-container'>
        {data.filter((item) => item.isBooked).length ? (
          <table>
            <tbody>
              <tr>
                <th>Seat Number</th>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              {data
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
        <EditBookingDetailsModal
          isOpen={showModal}
          onSubmit={saveFormData}
          selectedData={selectedRow}
          data={data}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default Dashboard
