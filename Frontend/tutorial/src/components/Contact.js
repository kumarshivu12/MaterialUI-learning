import React from 'react'
import {Link,Outlet} from 'react-router-dom'


const Contact = () => {
  return (
    <div>
        <h2>Hello From Contact page</h2>
        <Link to="house" >House</Link>
        <Link to="college" >College</Link>
        <Link to="me" >Me</Link>
        <Outlet/>
    </div>
  )
}

export default Contact