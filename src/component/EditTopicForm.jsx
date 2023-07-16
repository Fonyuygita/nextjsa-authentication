import React from 'react'

const EditTopicForm = () => {
  return (
  
    <form className='flex flex-col'>
    <input type="text" className="input" placeholder='Topic title' />
    <input type="text" className="input" placeholder='Topic Description' />
<button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Topic</button>

  </form>
  )
}

export default EditTopicForm
