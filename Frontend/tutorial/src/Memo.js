import React, { useState,useMemo } from 'react'

const Memo = () => {
    const [count,setCount]=useState(0)
    const [item,setItem]=useState(10)
    const countHandler=()=>{
        setCount(count+1)
    }
    const itemHandler=()=>{
        setItem(item*10)
    }
    const MultiMemo=useMemo(function mutiCount(){
        return count*5;
    },[count])
    
  return (
    <div>
        <h1>Hello From useMemo!!!</h1>
        <h3>Count : {count}</h3>
        <h3>Item : {item}</h3>
        <h3>{MultiMemo}</h3>
        <button onClick={countHandler}>Update Count</button>
        <button onClick={itemHandler}>Update Item</button>
    </div>
  )
}

export default Memo