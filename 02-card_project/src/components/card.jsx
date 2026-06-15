// Props-drilling
// import React from 'react'

// const Card = (props) => {
//   return (
//     <div className="card" >
//         <img src={props.img} ></img>
//         <h1>{props.user} </h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//         <button>View Profile</button>
//     </div>
//   )
// }
// export default Card

import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
      
              <div className='top+center' >
                <div className="top">
                <img src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg" ></img>
                <button>Save <Bookmark size={18} /></button>
              </div>
      
              <div className="center">
                <h3>{props.comp}<span>{props.date} </span></h3>
                <h2>{props.post}</h2>
                <div className='tag' >
                  <h4>{props.tag1}</h4>
                  <h4>{props.tag2} </h4>
                </div>
              </div>
              </div>
      
              <div className="bottom">
                  <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                  </div>
                <button>Apply Now</button>
              </div>
      
            </div>
    </div>
  )
}

export default Card
