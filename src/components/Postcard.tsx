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
    console.log(response.data)
    setname(response.data.username)
    setinfor(response.data.information)
  })
 },[])
  return (
    <div className='bg-gray-800 m-2 rounded-xl p-4'>
     <div className="flex items-center">
    <div className="w-8 h-8 rounded-full bg-gray-500 mr-2"></div>
    <div className="flex flex-col">
    <div className="">{name}</div>
    <div className="">{infor}</div>
    </div>
    </div>
     {info?.description}
    </div>
  )
}

export default Postcard
