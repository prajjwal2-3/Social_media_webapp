import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
const Addpost = () => {
  const post = useRef<HTMLInputElement>(null);
  function addpost(){
    axios.post('https://social-backend-navy.vercel.app/user/post')
  }
  
  
  return (
    <div className='bg-gray-200 h-20 rounded-xl flex items-center justify-evenly p-4'>
      <div className=''>
        <input type="text" ref={post} className='h-12 sm:w-96  rounded-lg p-2' />
      </div>
      <div className="" >
        <button className='bg-blue-500 p-2 m-1 rounded-md'>Post</button>
      </div>
    </div>
  ) 
}

export default Addpost
