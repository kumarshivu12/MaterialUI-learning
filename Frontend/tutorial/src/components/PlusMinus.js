import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../service/action/Action'

const PlusMinus = () => {
    const dispatch=useDispatch();
    const count =useSelector((state)=>state.changeCount)
    console.warn(count)
  return (
    <div>
        <h2>Functional Component</h2>
        <br/>
        <button onClick={()=>dispatch(decrement(10))}>-</button>&nbsp;&nbsp;
        {count}
        &nbsp;&nbsp;<button onClick={()=>dispatch(increment(20))}>+</button>
    </div>
  )
}

export default PlusMinus