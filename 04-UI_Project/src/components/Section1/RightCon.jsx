import React from 'react'
import RightCard from './RightCard'

const users = [
  {img: 'https://plus.unsplash.com/premium_photo-1706561441108-8d4be241fdc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhZHklMjB1c2luZyUyMGVhcnBob25lcyUyMGFuZCUyMGxvb2tpbmclMjBhdCUyMGhlciUyMHBob25lfGVufDB8fDB8fHww', 
   num : '1' , 
   con : 'Prime customers, that have access to bank credit and are satisfied with the current product' , 
   btn : 'Satisfied',
   color: 'orange'},

  {img: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    num : '2' , 
    con : 'Prime customers, that have access to bank credit and are satisfied with the current product' , 
    btn : 'Underserved',
    color : 'blue'},

  {img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww', 
    num : '3' , 
    con : 'Prime customers, that have access to bank credit and are satisfied with the current product' , 
    btn : 'Underbanked',
    color : 'green'},

  {img: 'https://plus.unsplash.com/premium_photo-1673289670385-362cce1ac848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8', 
    num : '4' , 
    con : 'Prime customers, that have access to bank credit and are satisfied with the current product' , 
    btn : 'Underbanked',
    color : 'red'}
];

const RightCon = () => {
  return (
    <div id='right' className='flex gap-6 h-[85vh] pb-13 overflow-x-auto rounded-4xl'>
      {users.map(function(elem,idx){
        
        return <RightCard key={idx} img={elem.img} num={elem.num} con={elem.con} btn={elem.btn} tag={elem.color} />

      } )}
    </div>
  )
}

export default RightCon
