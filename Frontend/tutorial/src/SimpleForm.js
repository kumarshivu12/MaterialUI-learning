import React from 'react'

const SimpleForm = () => {
    const submitHandler=(event)=>{
        event.preventDefault();
    }
    const changeHandler=(event)=>{
        console.log(event.target.value)
    }
    const conditionHandler=(event)=>{
        console.log(event.target.value)
    }
    const optionHandler=(event)=>{
        console.log(event.target.checked)
    }
    const clickHandler=()=>{
        
    }
  return (
    <div>
        <p>Hello From Simple Form</p>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter Name' onChange={changeHandler}/>
            <select onChange={optionHandler}>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <input type="checkbox" onChange={conditionHandler}>Are you 18+</input>
            <button onClick={clickHandler}>Submit</button>
        </form>
    </div>
  )
}

export default SimpleForm