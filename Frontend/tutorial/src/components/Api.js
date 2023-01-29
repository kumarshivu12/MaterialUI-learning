import React, { useEffect, useState } from 'react'
const url="mongodb://localhost:27017";
const Api = () => {
    const [data,setData]=useState();
    const[userId,setUserId]=useState(null);
    //GET API
    // useEffect(()=>{
    //     fetch(url).then((result)=>{
    //         result.json().then((res)=>{
    //             // console.log(res);
    //             setData(res);
    //         })
    //     })
    // })
    const refreshData=()=>{
        fetch(url).then((result)=>{
            result.json().then((res)=>{
                // console.log(res);
                setData(res);
                setName(res[0].name)
                setEmail(res[0].email)
                setPhone(res[0].phone)
                setUserId(res[0].id)
            })
        })
    }
    useEffect(()=>{
        refreshData();
    })
    // console.log(data)
    //POST API
    fetch(url,{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        result.json().then((res)=>{
            // console.log(res)
        })
    })
    //DELETE API
    const deleteuser=(id)=>{
        fetch(`url/${id}`,{
            method:"DELETE",
        }).then((result)=>{
            result.json().then((res)=>{
                // console.log(res)
                refreshData();
            })
        })
    }
    //prefilled FORM
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const selectuser=(id)=>{
        // console.log(data[id])
        setName(data[id].name)
        setEmail(data[id].email)
        setPhone(data[id].phone)
        setPhone(data[id].id)
    }
    //PUT API
    const submitHandler=()=>{
        const item={name,email,phone,userId}
        fetch(`url/${userId}`,{
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content=Type":"application/json"
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((res)=>{
                // console.log(res)
                refreshData();
            })
        })
    }
  return (
    <div>
        <h2>Hello from API</h2>
        <button onClick={()=>{deleteuser(data.id)}}>Delete </button>
        <button onClick={()=>{selectuser(data.id)}}>Update </button>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <button onClick={submitHandler}>Update User</button>
    </div>
  )
}

export default Api