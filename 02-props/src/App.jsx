// Props-drilling
// import React from 'react'
// import Card from './components/card'

// const App = () => {
//   return (
//     <div className="parent" >
//       <Card user='Jasnoor Kaur' img='https://images.unsplash.com/photo-1780995173654-fd42bcb501cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' />
//       <Card user='Amarjit Singh' img='https://images.unsplash.com/photo-1777971911576-de6d56a93681?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8' />
//     </div>
//   )
// }

// export default App

import React from 'react'
import Card from './components/card'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "London, United Kingdom",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "6 days ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "4 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    name: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    name: "Uber",
    datePosted: "8 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Amsterdam, Netherlands",
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    name: "Salesforce",
    datePosted: "10 weeks ago",
    post: "DevOps Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "San Francisco, USA",
  },
];


  return (
    <div className='parent' >

      {jobs.map(function(elem,idx){

        return <div key={idx} >
          <Card comp={elem.name} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} date={elem.datePosted} />
        </div>

      })}

    </div>  )
}

export default App
