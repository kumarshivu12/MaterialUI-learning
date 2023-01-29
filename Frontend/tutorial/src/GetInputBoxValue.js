import React, { useState } from 'react'

const GetInputBoxValue = () => {
    const [data,setData]=useState('')
    const changeHandler=(event)=>{
        setData(event.target.value)
    }
  return (
    <div>
        <p>Hello from {data}</p>
        <input type="text" onChange={changeHandler}/>
    </div>
  )
}

export default GetInputBoxValue