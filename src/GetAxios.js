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
    {
      data.map((item) => {
        const {id, title, body} = item;
        return (
          <div className='data' key={id}>
          <h1>{id}</h1>
          <h2>{title.slice(0,10)}</h2>
          <h3>{body.slice(0,50).toUpperCase()}</h3>
          </div>
        )
      })
    }
    </>
  )
}

export default GetAxios;
