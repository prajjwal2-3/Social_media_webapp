import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from './Header1.tsx'
import Usersuggestion from './Usersuggestion.tsx'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { UseDispatch } from 'react-redux'
import { addsuggestedUser } from '../utils/suggestionslice.ts'
import axios from 'axios'
const Browse = () => {
  const dispatch = useDispatch()
  
  interface RootState {
    user: {
        user: {
          username:string,
          password:string
        }
    };
}
  const userdata=useSelector((state:RootState)=>state.user.user)
   console.log(userdata)
   const headers={
    'username':userdata?.username,
    'password':userdata?.password
   }
  useEffect(()=>{
    axios.get('http://localhost:3001/user/usersuggestion',{
      headers:headers
    }).then(response=>{
    dispatch(addsuggestedUser(response.data.user))
   
      console.log(response)
    })
    .catch(error=>{
      alert(error)
    })
  },[])
 
  const arr= [1,2,3,4,5,6,7,7,8,6,6,7,8,6,4,5,3]
  return (
    <div>
       <PrimarySearchAppBar/>
      <div className=" flex flex-row justify-evenly sm:mt-12 mt-8">
        <div className=" bg-gray-200 w-3/12 h-96 overflow-y-scroll overflow-x-hidden hidden sm:block p-4 rounded-2xl">
          <div className="w-full  text-center font-bold text-xl m-2">You may Know them</div>
          <div className="">
            {arr.map((e,index)=>( <Usersuggestion key={index}/>))}
           
          </div>
        </div>
        <div className=" bg-blue-500 sm:w-4/12  w-10/12">add post</div>
        <div className=" bg-green-500 w-3/12 hidden  sm:block">latest news</div>
      </div>
    </div>
  )
}

export default Browse
