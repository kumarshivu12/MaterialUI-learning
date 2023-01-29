import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const clickHandler=()=>{
    localStorage.setItem('login',true)
    navigate('/')
  }
  useEffect(()=>{
    const login=localStorage.getItem('login');
    if(login){
        navigate('/')
    }
})
  return (
    <div>
      <h2>Login Page</h2>
      <input type="text"/>
      <br/>
      <input type="text"/>
      <br/>
      <button onClick={clickHandler}>Login</button>
    </div>
  )
}

export default Login