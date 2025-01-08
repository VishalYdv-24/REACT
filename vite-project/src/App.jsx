import { useState } from 'react'
// import './App.css'

function App() {
  const [initial, setInitial] = useState('');
  const [data, setData] = useState([]);

  const getInput = (event) => {
    console.log(event.target.value);
    setInitial(event.target.value);
  }

  const getData = () => {
    console.log("Task:"+initial);
    let s = [...data,initial];
    setData(s);
    setInitial('');
  }


 const deleteTask = (index) => {
  let filterData = data.filter((curTask,indx) => {
    return indx != index
  })
  setData(filterData)
 }

  return (
    <div className='h-dvh flex  items-center flex-col bg-background text-white '>
      <div className='w-1/2 h-10 flex gap-x-10 justify-center items-center mt-40'>
        <input type="text" placeholder='Enter Task' className='w-4/5 text-black border-b-2 border-pink-400 h-10 rounded-sm' onChange={getInput} value={initial}/>
        <button onClick={getData} className=' h-10 bg-addButton p-2 rounded-lg'>Add Task</button>
      </div>
      <div className='flex flex-col w-1/2'>
        {data.map ((curVal,index) => {
          return (
            <>
            <div>
              <div className='flex bg-taskColor rounded-lg my-2 h-10 justify-center items-center pr-7'>
              <p className='m-3 '>{curVal}</p>
              <button className='ml-auto hover:bg-hoverColor hover:text-black hover:text-bold hover:px-1 hover:rounded-xl' onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App

