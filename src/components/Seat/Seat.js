import { useEffect, useState } from 'react'
import './Seat.css'

function Seat(props) {
    const [isSelected, setIsSelected] = useState(false);
    const [className, setClassName] = useState(props.data.isBooked ? 'booked' : 'available');

    useEffect(() => {
      if(props.data.isBooked) {
        setClassName('booked');
      }
    }, [props.data.isBooked])

  return (
    <button 
    className={`seat ${className}`} 
    onClick={(e) => {
      setClassName(isSelected ? 'available': 'selected');
      setIsSelected(!isSelected);
      props.updateSelectedSeat({
        ...props.data,
        isSelected: !isSelected
      });
    }} 
    disabled={props.data.isBooked}>
            <span className="seat-label">{props.data.seatNumber}</span>
        <div className="pillow"></div>
    </button>
  )
}

export default Seat