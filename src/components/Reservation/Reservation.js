import React, { useContext, useState } from 'react'
import Level from '../Level/Level'
import './Reservation.css'
import AddBookingDetailsModal from '../AddBookingDetailsModal/AddBookingDetailsModal'
import { SeatsContext, SeatsDispatchContext } from '../Context/SeatsContext'

function Reservation(props) {
  const seats = useContext(SeatsContext)
  const dispatch = useContext(SeatsDispatchContext)
  const [selectedSeats, setSelectedSeats] = useState([])
  const [showModal, setShowModal] = useState(false)

  const updateDataArray = (updatedDataItem) => {
    const filteredData = selectedSeats.filter(
      (item) => item.seatNumber !== updatedDataItem.seatNumber
    )
    filteredData.push(updatedDataItem)
    filteredData.sort((a, b) => a.id - b.id)
    setSelectedSeats(filteredData)
  }

  const saveFormData = (e, formData) => {
    e.preventDefault()
    dispatch({
      type: 'added',
      formData,
    })
    setShowModal(false)
  }

  return (
    <div>
      <h1>Please Select Seat</h1>
      <div className='reserve-container'>
        <h4>Lower Deck</h4>
        <div className='border-with-back'>
          <Level
            levelCode='L'
            label='Lower Level'
            data={seats.slice(0, 20)}
            dataUpdates={(dataItem) => updateDataArray(dataItem)}
          />
        </div>
        <h4>Upper Deck</h4>
        <div className='border-with-back'>
          <Level
            levelCode='U'
            label='Upper Level'
            data={seats.slice(20, 40)}
            dataUpdates={(dataItem) => updateDataArray(dataItem)}
          />
        </div>
      </div>
      <button
        className='save-selection-btn'
        disabled={
          selectedSeats.filter((item) => item.isSelected).length ? false : true
        }
        onClick={() => setShowModal(true)}
      >
        Save Selection
      </button>
      {showModal && (
        <AddBookingDetailsModal
          isOpen={showModal}
          onSubmit={saveFormData}
          data={selectedSeats}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default Reservation
