import { useReducer } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import {
  SeatsContext,
  SeatsDispatchContext,
} from '../components/Context/SeatsContext'
import seatsReducer from '../Reducer/SeatsReducer'

const initialSeats = Array.from({ length: 40 }, (_, i) => {
  return {
    id: i + 1,
    seatNumber: i < 20 ? `L${i + 1}` : `U${i + 1}`,
    user: {
      firstName: '',
      lastName: '',
      email: '',
    },
    isBooked: false,
    isSelected: false,
    date: null,
  }
})

function Home() {
  const [seats, dispatch] = useReducer(seatsReducer, initialSeats)
  return (
    <>
      <Header />
      <SeatsContext.Provider value={seats}>
        <SeatsDispatchContext.Provider value={dispatch}>
          <Main />
        </SeatsDispatchContext.Provider>
      </SeatsContext.Provider>
      <Footer />
    </>
  )
}

export default Home
