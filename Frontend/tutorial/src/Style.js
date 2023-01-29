import React from 'react'
import './Style.css'
import style from './style.module.css'

const Style = () => {
  return (
    <div>
        <h1 className="primary">Hello From Style 1 (Normal)</h1>
        <h1 style={{backgroundColor:"brown",color:"yellow"}}> Hello From Style 2 (Inline)</h1>
        <h1 className={style.success}>Hello From Style 3 (Module)</h1>
    </div>
  )
}

export default Style