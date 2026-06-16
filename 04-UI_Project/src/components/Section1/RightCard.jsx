import React from 'react'

const RightCard = (props) => {
  return (
    <div>
      <div className=' h-full w-77 overflow-hidden relative rounded-4xl'>
        <img className='object-cover h-full w-full rounded-4xl' src={props.img} ></img>
        <div className='absolute text-white top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='text-black bg-white rounded-full h-10 w-10 font-semibold flex justify-center items-center text-xl'>{props.num}</h2>
            <div>
                <p className='text-l mb-10 w-43 font-semibold'>{props.con}</p>
                <div className='flex justify-between'>
                  <button style={{backgroundColor:props.tag}} className='font-semibold rounded-full px-5 py-2'>{props.btn}</button>
                  <button style={{backgroundColor:props.tag}} className=' rounded-full px-3 py-1 font-extralight text-xl '><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard
