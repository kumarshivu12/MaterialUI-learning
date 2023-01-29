import React, { useState } from 'react'

const Toggle = () => {
    const [data,setData]=useState(true)
    const hideHandler=()=>{
        setData(false)
    }
    const showHandler=()=>{
        setData(true)
    }
    const toggleHandler=()=>{
        setData(!data)
    }
  return (
    <div>
        <p>{data?<p>Hello From Toggle!!!</p>:null}</p>
        <button onClick={hideHandler}>Hide</button>
        <button onClick={showHandler}>Show</button>
        <button onClick={toggleHandler}>Toggle</button>
    </div>
  )
}

export default Toggle