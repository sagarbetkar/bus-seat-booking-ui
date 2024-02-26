import { useRef, useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import './AddBookingDetailsModal.css'

function AddBookingDetailsModal({ onSubmit, isOpen, onClose, data }) {
  const [formData, setFormData] = useState([...data])
  const [disableSave, setDisableSave] = useState(true)
  const focusInputRef = useRef(null)

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current?.focus()
      }, 0)
    }
  }, [isOpen])

  const handleInputChange = (event) => {
    const { id, name, value } = event.target
    const filteredItem = formData.map((item) =>
      item.id === Number(id)
        ? {
            ...item,
            user: {
              ...item.user,
              [name]: value,
            },
          }
        : item
    )
    setDisableSave(isValidForm() ? false : true)
    setFormData(filteredItem)
  }

  const clearFormData = () => {
    setDisableSave(true)
    setFormData(data)
    onClose()
  }

  const isValidForm = () => {
    const selectedSeats = formData.filter((item) => item.isSelected)
    const isValid = selectedSeats.every((item) => {
      if (item.user.firstName && item.user.lastName && item.user.email) {
        return true
      }

      return false
    })
    return isValid
  }

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={clearFormData}>
      <form onSubmit={(e) => onSubmit(e, formData)}>
        {data
          .filter((item) => item.isSelected)
          .map((item, i) => (
            <div key={item.id} className='form-box'>
              <div className='form-fields'>
                <label>Add Passenger {i + 1} Details</label>
                <br />
                <label>Selected Seat:</label> {item.seatNumber}
              </div>
              <div className='form-fields'>
                <label>
                  First Name<span className='required'>*</span>:
                </label>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  id={item.id}
                  defaultValue={item.user.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='form-fields'>
                <label>
                  Last Name<span className='required'>*</span>:
                </label>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  id={item.id}
                  defaultValue={item.user.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='form-fields'>
                <label>
                  Email<span className='required'>*</span>:
                </label>
                <input
                  type='text'
                  name='email'
                  placeholder='Email Address'
                  id={item.id}
                  defaultValue={item.user.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          ))}
        <button
          disabled={disableSave}
          className='form-submit-btn'
          type='submit'
        >
          Submit
        </button>
      </form>
    </Modal>
  )
}

export default AddBookingDetailsModal
