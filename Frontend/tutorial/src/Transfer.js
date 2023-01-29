import React from 'react'

const Transfer = (props) => {
    const students=[
        {
          name:"shivam",
          email:"2020uce0060",
          branch:"civil"
        },
        {
          name:"kumar",
          email:"2020uce0060",
          branch:"civil"
        },
        {
          name:"shivu",
          email:"2020uce0060",
          branch:"civil"
        }
      ]
      const clickHandler=()=>{
        props.func(students)
      }
  return (
    <div>
        <h1>Hello From Transfer Data From Child To Parent</h1>
        <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default Transfer