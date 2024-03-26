import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { useSelector } from 'react-redux';
const Addpost = () => {
  interface RootState {
    user: {
        user: {
          username:string,
          password:string
        }
    }

}
interface user {
  userdata:{
    username:string,
    password:string,
    msg:string
  }
}
  const post = useRef<HTMLInputElement>(null);
  let userdata = useSelector((state:RootState)=>state.user.user)
  let username = localStorage.getItem("username")
  let password = localStorage.getItem("password")
  const headers={
    'username':username,
    'password':password
  }
  function addpost(){
   if(post.current){
    const data = post.current.value
    axios.post('https://social-backend-navy.vercel.app/user/post',{description:data},{headers:headers}).then(()=>{
      alert('post updated successfully');
     
  })
   }
  }
  
 
  return (
    <div className='bg-gray-200 h-20 rounded-xl flex items-center justify-evenly p-4'>
      <div className=''>
        <input type="text" ref={post} id='myi' placeholder='Share something with the world' className='h-12 sm:w-96  rounded-lg p-2' />
      </div>
      <div className="" >
        <button onClick={addpost} className='bg-blue-500 p-2 m-1 rounded-md'>Post</button>
      </div>
    </div>
  ) 
}

export default Addpost
