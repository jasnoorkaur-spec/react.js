import React from 'react'
import { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState('')

  const submitHandler = (e) => 
  {
    e.preventDefault()
    console.log("Form submitted by",Title);
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} >
      <input type='text' placeholder='Enter your name' value={Title} onChange={(e)=>{
        setTitle(e.target.value)
      }}></input>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App