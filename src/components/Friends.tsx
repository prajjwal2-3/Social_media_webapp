import React from 'react'
import PrimarySearchAppBar from './Header1.tsx'
import Usersuggestion from './Usersuggestion.tsx'
import {  useSelector } from 'react-redux'
const Friends = () => {
    interface RootState {
        user: {
            user: {
              username:string,
              password:string
            }
        },
        suggested:{
          suggesteduser:any[]
        }
    }
    const suggestion = useSelector((state:RootState)=>state?.suggested?.suggesteduser)
  return (
    <div className=" bg-gray-800 w-full  h-screen overflow-y-scroll  overflow-x-hidden  p-4 ">
    <div className="w-full  text-center font-bold text-xl m-2 text-white">You may Know them</div>
    <div className="w-full h-0.5 bg-gray-100"></div>
    <div className="">
      {suggestion.map((e,index)=>( <Usersuggestion info={e}  key={index}/>))}
    </div>
  </div>
  )
}

export default Friends
