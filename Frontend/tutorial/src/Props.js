import React from 'react'

const Props = (props) => {
  return (
    <div>
        <p>Hello From Props</p>
        <p>Hello {props.name}</p>
        <p>email : {props.email}</p>
        <p>phone : {props.other.phone}</p>
        <button onClick={props.data}> Click Me</button>

    </div>
  )
}

export default Props