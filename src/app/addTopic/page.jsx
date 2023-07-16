
"use client";
// use client here because we need interactivity
import React from 'react'
import { useRouter } from 'next/router';
import styles from "./page.module.css"
const AddTopic = () => {
  const router=useRouter();
  const [title, setTitle]=useState("");
  const [topic, setTopic]=useState("");

 const handleSubmit=async(e)=>{
e.preventDefault();
if(!title || !topic){
  alert('title and description are required');
}

try {
  // fetch our data from mongo db or server
  const res=await fetch("http://localhost:3000/api/topics",
  {
    method:"POST",
    header:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({title, description})
  })
  if(res.ok) {
    // then we want to navigate to the home page
    router.push('/')
  }
  else{
    throw new Error("failed to create a topic")
  }
  
  // otherwise we want to get this data from our api
  return 
} catch (err) {
console.log(err);  
}

 }
  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <input type="text" value={title} className={styles.input} placeholder='Topic title' onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" value={topic} className={styles.input} placeholder='Topic Description' onChange={(e)=>setTopic(e.target.value)} />
<button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit' >Add Topic</button>

    </form>
  )
}
export default AddTopic
