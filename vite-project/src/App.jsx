import React, { useState } from 'react'

function App() {
    const [color,setColor] = useState('pink')
    const colorArr = ["red","green","blue","pink","brown","orange","yellow","lime","purple"]
  return (
    <div className='bg-slate-500 h-screen w-screen' style={{backgroundColor:color}}>
        <div className='w-10/12 h-11 bg-slate-700 m-auto rounded-xl flex justify-center items-center'>
            {
                colorArr.map((clr) => (
                    <>
                    <div className='m-auto'>
                        <button className='text-white m-auto p-1 rounded-sm' style={{backgroundColor:clr}} onClick={()=> setColor(clr)}>{clr}</button>
                    </div>
                    </>
                ))
            }
            
        </div>
    </div>
  )
}

export default App