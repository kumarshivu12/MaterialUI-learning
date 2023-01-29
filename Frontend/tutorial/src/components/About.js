import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const About = () => {
  const navigate=useNavigate();
  const navToPage=(url)=>{
    navigate(url)
  }
  return (
    <div>
        <h2>Hello From About Page</h2>
        <ul>
        <li><Link to="/user/shivam"> Shivam </Link> <button onClick={()=>navToPage('/user/shivam')}>Go to Page</button></li>
        <li><Link to="/user/shivu"> Shivu </Link> <button onClick={()=>navToPage('/user/shivu')}>Go to Page</button></li>
        </ul>
    </div>
  )
}

export default About