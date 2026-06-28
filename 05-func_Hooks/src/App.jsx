// import React from 'react'
// const App = () => {

//   // const mouseOver = () => {
//   //   console.log("mouse was hovered");
    
//   // }

//   const inputChange = (val) => 
//   {
//     console.log(val);
//   }
//   return (
//     <div>
//       <button onClick={() => 
//       {
//         console.log("btn clicked");

//       }} >Change User</button>
//       <br></br>
//       <br></br>
//       <input onChange={function(elem)
//       {
//         inputChange(elem.target.value)

//       }}  type='text' placeholder='Enter Name'></input>

//     </div>
//   )
// }
// export default App


// import React from 'react'
// const App = () => {

//   const pageScroll =(val) =>
//   {
//     console.log('page scrolling at speed :',val);
//   }

//   return (
//     <div onWheel={function(elem) 
//       {
//         pageScroll(elem.deltaY)
//       }} >

//       {/* <div onMouseMove={(elem) => 
//       {
//         console.log(elem.clientY);
        
//       }} 
      
//       className="box"></div> */}

//       <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div>
//     </div>
//   )
// }
// export default App


// import React, { useState } from 'react'
// const App = () => {

//   const [Num, setNum] = useState(0)

//   function incNum()
//   {
//     setNum(Num+1)
//   }

//   function decNum()
//   {
//     setNum(Num-1)
//   }

//   return (
//     <div>
//       <h1>{Num}</h1>
//       <button onClick={incNum} >Increase</button>
//       <button onClick={decNum} >Decrease</button>
//     </div>
//   )
// }
// export default App


import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState({user:'jasnoor' , age:20})

  const btnClick = () => 
  {
    const newNum = {...Num};
    // setNum(prev => ({...prev,user:'naina' , age:90}))
    
    newNum.user = 'naina';
    newNum.age = 90;
    setNum(newNum);
    
  }

  return (
    <div>
      <h1>{Num.user} , {Num.age}</h1>
      <button onClick={btnClick} >Click</button>
    </div>
  )
}

export default App