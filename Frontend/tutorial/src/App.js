import React, { useState } from 'react'
import {Button, TextField} from '@mui/material'

const App = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [file,setFile]=useState([])
  const submitHandler=async ()=>{
    const data=new FormData();
    data.append('name',name);
    data.append('email',email);
    data.append('filename',file.name);
    data.append('files',file)
    // await uploadFile(data)
    setFile([])
  }
  return (
    <div>
      <TextField
      type='text'
      label='Name'
      placeholder='Enter Name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      required
      />
      <TextField
      type='email'
      label='Email'
      placeholder='Enter Email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      required
      />
      <input
      type='file'
      // value={file}
      required
      onChange={(e)=>setFile(e.target.files)}
      multiple
      />
      <Button
      variant='contained'
      onClick={submitHandler}
      >
        Submit
      </Button>
    </div>
  )
}

export default App