import React from 'react'
import { useRef ,useState} from 'react'
import axios from 'axios'
import { addUser } from '../utils/userslice.ts'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const name = useRef<HTMLInputElement>(null);
  const information = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
 const [islogin,setislogin]=useState(false);
  const dispatch = useDispatch();
 function handleclick(){
  setislogin(!islogin)
 }

  const signup = () => {
    if (name.current && password.current && information.current) {
      axios
        .post("https://social-backend-navy.vercel.app/user/signup", {
          username: name.current.value,
          password: password.current.value,
          information: information.current.value
        })
        .then((Response)=>{
          
         console.log(Response)
          dispatch(addUser(Response.data))
          localStorage.setItem("username",Response.data.username)
          localStorage.setItem("password",Response.data.password)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.error('One or more refs are null.');
    }
  };
  const login = () => {
    if (name.current && password.current) {
      const headers={
        'username':name.current.value,
        'password':password.current.value
      }
      axios
        .get("https://social-backend-navy.vercel.app/user/login", {
          headers:headers
        })
        .then((Response)=>{
          
         console.log(Response)
          dispatch(addUser(Response.data))
          localStorage.setItem("username",Response.data.username)
          localStorage.setItem("password",Response.data.password)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.error('One or more refs are null.');
    }
  };
  return (
    <div className='flex  h-screen relative '>
      <div className='   sm:bg-gray-200 sm:w-6/12  h-screen flex '>
        <img  src="https://res.cloudinary.com/dzkldv06d/image/upload/v1710831558/undraw_buffer_wq43_hupvhm.svg" className='object-cover w-full' alt="" />
      </div>
      <div className=' absolute sm:relative flex flex-col sm:m-18  items-center   justify-around sm:p-4 sm:w-6/12 w-full h-screen'>
       {
       islogin? 
       <div className='flex flex-col h-3/6 w-7/12 justify-between  '>
        <div className='w-full text-center font-bold text-2xl'>LOGIN IN</div>
        
       <input ref={name} type="text" placeholder='Enter Name' className='rounded-lg p-4 opacity-90 sm:opacity-100 bg-gray-200  '/>
        <input ref={password} type="text"   placeholder='Enter Password' className='rounded-lg p-4 opacity-90 sm:opacity-100 bg-gray-200 '/>
        
        <button className='bg-blue-500 p-2 rounded-lg  ' onClick={login}>Login</button>
        </div>
        : 
         <div className='flex flex-col h-3/6 w-7/12 justify-between  '>
        <div className='w-full text-center font-bold text-2xl'>Sign UP</div>
        
       <input ref={name} type="text" placeholder='Enter Name' className='rounded-lg p-4 opacity-90 sm:opacity-100 bg-gray-200  '/>
        <input ref={password} type="text"   placeholder='Enter Password' className='rounded-lg p-4 opacity-90 sm:opacity-100 bg-gray-200 '/>
        <input ref={information} type="text"   placeholder='who are you' className='rounded-lg p-4 opacity-90 sm:opacity-100 bg-gray-200 '/>
        <button className='bg-blue-500 p-2 rounded-lg  ' onClick={signup}>Sign Up</button>
        </div>
        }
        <div className=""><button onClick={handleclick}>
          {islogin?'Not a user?? Sign up now':"Already a user?? Login now"}
          </button></div>
      </div>
      
    </div>
  )
}

export default Signup 
