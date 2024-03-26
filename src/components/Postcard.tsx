import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Postcard = ({info}) => {
  const[name,setname]=useState();
  const [infor,setinfor]=useState();
 useEffect(()=>{
  const headers={
    'userid':info.user_id
  }
  axios.get('https://social-backend-navy.vercel.app/user/userinfo',{
    headers:headers
  }).then((response)=>{
    
    setname(response.data.username)
    setinfor(response.data.information)
  })
 },[])
  return (
    <div className='bg-gray-800 m-2 rounded-xl p-4'>
     <div className="flex items-center bg-gray-600 rounded-lg p-2 shadow-md">
    <div className="w-8 h-8 rounded-full shadow-lg bg-gray-500 mr-2"></div>
    <div className="flex flex-col">
    <div className="text-white">{name}</div>
    <div className="text-white text-xs">{infor}</div>
    </div>
    </div>
    <div className="flex items-center mt-2 bg-gray-600 rounded-lg p-2 text-white shadow-md">
    {info?.description}
    </div>
     
    </div>
  )
}

export default Postcard
