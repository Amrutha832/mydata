import React, { useState ,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response=>setData(response.data)).catch(console.log("error"))
  })
  return (
    <div>
      <ul>
        {data.map((item,index)=>(
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App