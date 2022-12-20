import Axios  from 'axios';
import React, { useState } from 'react'

function PostAxios() {
    const [my_title ,setTitle] = useState("");
    const [my_body ,setBody] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts",{
            title:my_title,
            body:my_body
            // if the property name and state name is same,you can write like this
            // title,
            // body
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Title:</label>
        <input type="text" name="title" value={my_title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>Enter Body:</label>
        <input type="text" name="body" value={my_body} onChange={(e)=>setBody(e.target.value)}  />
        <input type="submit" value="Post"/>
      </form>
    </>
  )
}

export default PostAxios;
