import React, { useState } from 'react'

function App() {
  const[color,setColor] = useState("RED");
  const changeColor = ()=>{
    setColor("BLUE")
  }

  // USESTATE USING OBJECT 
  const[bike,setBike] = useState({
    brand:"Honda",
    color:"Black",
    model:"Unicorn",
    year:"2021",
  })

  const changeBike = () => {
    setBike((prev) => {
      return{...prev,brand:"Hero",
        color:"Red",
        model:"Passion Pro",
        year:"2019"}
    })
  }

  const [count,setCount]=useState(0)
  const incCount = () => {
    setCount((prev) => prev+1)
    setCount((prev) => prev+1)
    setCount((prev) => prev+1)
    setCount((prev) => prev+1)
  }
  return (
    <>
    <div className='flex justify-center items-center flex-col gap-y-10'>
      <div className='text-center text-9xl'>USESTATE</div>
      <h1 className='text-3xl'>My Favorite Color is {color}!</h1>
      <button onClick={changeColor}>BLUE</button>


      <h1>My {bike.brand}, It is {bike.color} {bike.model} from year {bike.year}</h1>
      <button onClick={changeBike}>Change</button>

      <h1>COUNT: {count}</h1>
      <button onClick={incCount}>INC by 4</button>
    </div>

    </>
  )
}

export default App