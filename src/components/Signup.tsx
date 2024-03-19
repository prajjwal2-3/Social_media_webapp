import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
const Signup = () => {
const name = useRef(null)

const password = useRef(null)
function signup(){
       axios
       .post("http://localhost:3001/user/signup",{username:"prajjwalsharma" ,password:"prajjwal@098",information:"react developer"})
       .then((Response)=>{
        console.log(Response)
       })
}
  return (
    <div className='flex h-screen '>
      <div className='w-6/12 p-20 bg-gray-200  '>
        <img  src="https://res.cloudinary.com/dzkldv06d/image/upload/v1710831558/undraw_buffer_wq43_hupvhm.svg"  alt="" />
      </div>
      <div className='flex flex-col m-18  items-center justify-around p-4 w-6/12'>
       
        <div className='flex flex-col h-3/6 w-7/12 justify-between '>
        <div className='w-full text-center font-bold text-2xl'>LOGIN IN</div>
        
       <input ref={name} type="text" placeholder='Enter Name' className='rounded-lg p-4 bg-gray-200  '/>
        <input ref={password} type="text"   placeholder='Enter Password' className='rounded-lg p-4 bg-gray-200 '/>
        <button className='bg-blue-500 p-2 rounded-lg  ' onClick={signup}>Sign Up</button>
        </div>
      </div>
      
    </div>
  )
}

export default Signup 
