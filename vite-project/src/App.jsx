import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let inc = () => {
    setCount(count+1)
  }

  let dec = () => {
    setCount(count-1)
}
  return (
    <>
    <h1>Counter : {count}</h1>
    <button onClick={inc}>Increase</button>
    <button onClick={dec}>Decrease</button>
    </>
  )
}

export default App
