import React, { useRef } from 'react'

const Ref = () => {
    const inputRef=useRef(null);
    const clickHandler=()=>{
        inputRef.current.value="1000";
        inputRef.current.style.color="red"
        inputRef.current.style.display="none"
    }
  return (
    <div>
        <h1>Hello From useRef!!!</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={clickHandler}>Handle Input</button>
    </div>
  )
}

export default Ref