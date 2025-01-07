import { useState } from 'react'
// import './App.css'

function App() {

  const [inputValue,setInputValue] = useState('');
  const [isClicked,setIsClicked] = useState(false);
  const [store, setStore] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    console.log(newValue);
  }

  const submitEffect = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false)
    }, 200);
  }
  const isSubmit = () => {
    submitEffect();
    const newInput = inputValue;
    setStore(newInput);
    console.log(`Name : ${newInput}`);
  }
  return (
    <>
    <div className='flex flex-col-reverse border-2 border-black h-dvh w-full justify-center items-center bg-green-200 '>
      <div className='flex bg-slate-200 w-5/12 gap-x-2 px-2'>
          <p className='font-bold '>Name : </p>
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter Name' className=' border-b-2 border-black h-1/8 bg-slate-200 w-3/4' />
          <button onClick={isSubmit} value="Vishal"className={`px-2 ml-4 text-white font-bold ${isClicked? "bg-green-400" : "bg-sky-500"} hover:${isClicked? "bg-green-400" : "bg-sky-700"}` }>Submit</button>
      </div>
      <div>
          {store && <h1> Name : {store}</h1>}
      </div>
    </div>
    </>
  )
}

export default App

