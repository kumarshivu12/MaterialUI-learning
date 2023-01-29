import React, { useState } from 'react'

const State = () => {
    const [data,setData]=useState('Shivam')
    const clickHandler=()=>{
        setData('Shivu')
    }
  return (
    <div>
        <p>Hello From State Function</p>
        <p>Hello {data}</p>
        <button onClick={clickHandler}>Change Name</button>
    </div>
  )
}

export default State