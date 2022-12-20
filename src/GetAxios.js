import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function GetAxios() {
    const [data,setData] = useState([])

    useEffect(()=>{
        Axios.get(baseUrl)
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
  return (
    <>
      {data.map((item,index)=>{
        return(
            
      <>
        key={index}
       <h2>title={item.title}</h2>
       <h3>body={item.body}</h3>
       </>
        )
      })
      }
    </>
  )
}

export default GetAxios;
