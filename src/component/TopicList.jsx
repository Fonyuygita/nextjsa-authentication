import Link from 'next/link'
import React from 'react'
import RemoveBtn from './RemoveBtn'

// lets write function to fetch data from our mongodb

const getData=async()=>{

try {
  const res=await fetch("http://localhost:3000/api/topics", {cache:'no-store'});
  console.log("getting data");
  // check if error occurred;
  if(!res.ok) {
    console.log("Error occured")
    return new Error("Error occurred")
  };
  // if now error occurred, then we want to return our data in json format
  return res.json();
 

} catch (err) {
  console.log("error has occurred, check your connection");
}
}


const TopicList =async() => {

  const {topics}=await getData();
  console.log(topics);
  return (
    <>
    {topics.map((topic)=>(
      <div className='container ' key={topic._id}>
      <div className="output">
        <h1 className='font-bold text-2xl t-title'>{topic.title}</h1>
        <div>{topic.description}</div>
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
