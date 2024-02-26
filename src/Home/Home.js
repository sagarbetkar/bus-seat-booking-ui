import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

const data = Array.from({ length: 40 }, (_, i) => {
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
  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  )
}

export default Home
