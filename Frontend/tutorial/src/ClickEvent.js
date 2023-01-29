import React from 'react'

const ClickEvent = () => {
    const clickHandler = () =>{
        alert('click handler clicked')
    }
  return (
    <div>
        <p>Hello From ClickEvent Function</p>
        <button onClick={clickHandler}> Click Me</button>
    </div>
  )
}

export default ClickEvent