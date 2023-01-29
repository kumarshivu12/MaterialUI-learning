import React from 'react'
import{ useParams} from 'react-router-dom'

const User = () => {
    const params=useParams();
    const {name}=params;
  return (
    <div>
        <h2>Hello From {name} Page</h2>
    </div>
  )
}

export default User