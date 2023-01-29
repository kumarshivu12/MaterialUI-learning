import React,{useEffect,useState} from 'react'

const Effect = () => {
    const [data, setData] = useState(0)
    const [item, setItem] = useState(100)
    useEffect(()=>{
        console.log('useEffect Hook Is Called')
    },[data])
    const clickHandler=()=>{
        setData(data+1)
    }
    const downHandler=()=>{
        setItem(item-1)
    }
  return (
    <div>
        <p>Welcome From useEffect Hook {data} : {item}</p>
        <button onClick={clickHandler}>Update</button>
        <button onClick={downHandler}>Downgrade</button>
    </div>
  )
}

export default Effect