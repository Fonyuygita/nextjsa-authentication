import Link from 'next/link'
import React from 'react'
import RemoveBtn from './RemoveBtn'

// lets write function to fetch data from our mongodb

const getData=async()=>{
try {
  const res=fetch("http://localhost:3000/api/topics", {cache:"no-store"});
  // check if error occurred;
  if(!res.ok) return new Error("Error occurred");
  // if now error occurred, then we want to return our data in json format
  return res.json()

} catch (err) {
  console.log("error has occurred, check your connection");
}
}


const TopicList =async() => {

  const {data}=await getData();
  return (
    <>
    {data.map((topic)=>(
      <div className='container ' key={data._id}>
      <div className="output">
        <h1 className='font-bold text-2xl t-title'>{data.title}</h1>
        <div>Topic Description</div>
      </div>
      <div className='flex gap-2'>
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          <span>Delete Icone</span>
        </Link>
      </div>
    </div>

    ))}
    </>
    
  )
}

export default TopicList
