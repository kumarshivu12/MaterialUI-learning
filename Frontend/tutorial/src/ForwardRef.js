import React,{forwardRef} from 'react'

const ForwardRef = (props,ref) => {
  return (
    <div>
        <h1>Hello From forwardRef</h1>
        <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(ForwardRef)