import React, { useEffect, useState } from 'react'

function App() {
  /*
  SYNTAX :
  useEffect(callBack function,dependency)
  useEffect(() => {
    callBack function code
    },[])

  
  
  */

    const[count,setCount]=useState(0)
    const[empty,setEmpty]=useState(0)
    const[vari,setVari]=useState(0)


// without any dependency it will execute whenever the state is chnaged
    useEffect(()=>{
      setTimeout(() => {
        setCount(count=>count+1)
      }, 2000);
    })

// with empty dependency array it will execute only onces irrespective of chnage in state
useEffect(()=>{
  setTimeout(() => {
    setEmpty(count=>count+1)
  }, 2000);
},[])

// with variable it will change whenever variable chnages
  useEffect(()=>{
    setTimeout(() => {
      setVari(count=>count+1)
    }, 2000);
  },[vari])
  return (
    <>
    <div className='flex justify-center items-center flex-col gap-y-10'>
      <div className='text-center text-5xl'>useEffect</div>
      <h1 className='font-bold text-3xl'>without D: I've render {count} times</h1>
      <h1 className='font-bold text-3xl'>empty D: I've render {empty} times</h1>
      <h1 className='font-bold text-3xl'>var D: I've render {vari} times</h1>
    </div>

    </>
  )
}

export default App