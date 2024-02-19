import { useState } from "react";
import { PATH } from "../config/path.config";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Main from "./Main/Main"

const data = Array.from({length: 40}, (_, i) => {
  return {
      id: i+1, 
      seatNumber: i < 20 ? `L${i+1}` : `U${i+1}` ,
      user: {
          firstName: '',
          lastName: '',
          email: '',
      },
      isBooked: false,
      isSelected: false,
      date: null
  }
})

function Home() {
  const [path, setPath] = useState(PATH.DASH);
  return (
    <>
    <Header setLink={(data) => {
      setPath(data)
      }}/>
    <Main path={path} data={data}/>
    <Footer/>
    </>
  )
}

export default Home