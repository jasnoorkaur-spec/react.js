import React from 'react'

const App = () => {

  const user = localStorage.getItem('user')
  console.log(user);
  
  // localStorage.setItem('age')
  // const age = localStorage.getItem('age')
  // console.log(age);
  
  localStorage.removeItem('age')

  return (
    <div>App</div>
  )
}

export default App