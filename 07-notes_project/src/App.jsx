import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [Title, setTitle] = useState('')
  const [Details, setDetails] = useState('')
  const [Task, setTask] = useState([])
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const submitHandler = (e) =>
  {
    e.preventDefault();

    const copytask = [...Task]

    copytask.push({Title,Details})

    setTask(copytask)

    setDetails('')
    setTitle('')
  }

  const delNote = (idx) => 
  {
    const copytask = [...Task]
    copytask.splice(idx,1)
    setTask(copytask)
  }

  return (
    <div className='lg:flex text-white h-full'>

      <form onSubmit={(e)=>
      {
        submitHandler(e)
      }} className='flex flex-col bg-black h-screen lg:w-1/2 '>

        <input 
          type='text' 
          placeholder='Note Title' 
          className='m-5 mt-2 p-3 border-b border-gray-600 text-[30px] font-bold '
          value={Title}
          onChange={(e)=>
          {
            setTitle(e.target.value)
          }}
        />

        <div className='flex gap-2 ml-5 pl-3'>
          <button 
          type='button'
          className='bg-zinc-900 rounded h-10 w-10 cursor-pointer'
          onClick={() => 

            setIsBold(!isBold)

          }>B</button>

          <button 
          type='button'
          className='bg-zinc-900 rounded h-10 w-10 cursor-pointer'
          onClick={() => {

            setIsItalic(!isItalic)
            
          }}
          >/</button>

          <button 
          type='button'
          className='bg-zinc-900 rounded h-10 w-10 cursor-pointer'
          onClick={() => setIsUnderline(!isUnderline)}
          ><u>U</u></button>
        </div>

        <textarea 
          type='text' 
          placeholder='Note Content' 
          className={`mx-5 mt-5 p-3 h-125 text-[18px] border-gray-600 border-t border-b 
            ${isBold ? "font-bold" : ""}
            ${isItalic ? "italic" : ""}
            ${isUnderline ? "underline" : ""} `}
          value={Details}
          onChange={(e)=>
          {
            setDetails(e.target.value)
          }}
        />

        
        <button 
        className='active:scale-97 bg-white text-black mx-5 my-3 p-3 rounded text-xl font-semibold cursor-pointer'>
        Add Note</button>
      </form>
      
      {/* SIDEBAR */}
      <div className='bg-black lg:border-l border-gray-600 lg:w-1/2 overflow-auto h-screen'>
        <h1 className='text-[29px] font-semibold ml-5 m-6 '>Recent Notes</h1>

        <div>
          {Task.map(function (elem,idx) {

            return <div key={idx} className='bg-zinc-800 h-34 mx-5 my-4 rounded-xl px-4 py-2 relative'>

              <h3 className='font-bold text-[21px] '>{elem.Title}</h3>
              <p className={`my-1 leading-snug 
                ${isBold ? "font-bold" : ""}
                ${isItalic ? "italic" : ""}
                ${isUnderline ? "underline" : ""}`} 
              >{elem.Details} </p>
              <button 
              className='absolute top-2 right-3 text-xs cursor-pointer'
              onClick={()=>{
                
                delNote(idx)
                
              }}
              > <X strokeWidth={2.25} /> </button>

            </div>

          })}
        </div> 
      </div>

    </div>
  )
}

export default App