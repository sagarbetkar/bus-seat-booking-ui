import Seat from "../Seat/Seat"
import './Level.css'

function Level(props) {
   return (
    <table className="level">
        <tbody>
            <tr>
                {props.data.slice(0,10).map((item) => {
                    return <td className="lower-level" key={item.seatNumber}><Seat key={`seat_${item.seatNumber}`} data={item} updateSelectedSeat={(dataItem) =>  props.dataUpdates(dataItem)}/></td>
                })} 
            </tr>
            <tr>
            {props.data.slice(10,20).map((item) => {
                return <td className="upper-level" key={item.seatNumber}><Seat key={`seat_${item.seatNumber}`} data={item} updateSelectedSeat={(dataItem) =>  props.dataUpdates(dataItem)}/></td>
            })} 
            </tr>
        </tbody>
    </table>
  )
}

export default Level