import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let inc = () => {
    setCount(count+1)
  }

  let reset = () => {
    setCount(count-count)
  }
  let dec = () => {
    setCount(count-1)
}
  return (
    <>
    <div className='flex justify-center items-center h-dvh bg-slate-300'>
      <div className='flex justify-center items-center w-1/2 h-1/2 bg-fuchsia-100 rounded-xl flex-col gap-y-6'>
        <div>
          <h1 className='text-5xl'>Counter : {count}</h1>
        </div>
        <div className=''>
          <button onClick={inc} className='bg-black text-white text-lg mx-1 p-1 px-2 rounded-lg'>Increase</button>
          <button onClick={dec} className='bg-black text-white text-lg mx-1 p-1 px-2 rounded-lg'>Decrease</button>
          <button onClick={reset} className='bg-black text-white text-lg mx-1 p-1 px-2 rounded-lg'>Reset</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
