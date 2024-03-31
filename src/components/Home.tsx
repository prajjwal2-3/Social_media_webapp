import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from './Header1.tsx'
import Usersuggestion from './Usersuggestion.tsx'
import {useDispatch, useSelector } from 'react-redux'
import { addsuggestedUser } from '../utils/suggestionslice.ts'
import { Route,Routes } from 'react-router-dom'
import axios from 'axios'
import Postsection from './Postsection.tsx'
import Friends from './Friends.tsx'
import News from './News.tsx'
const Home = () => {
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
  if(suggestion===null) return <div className="">loading....</div>
  return (
    <div className='bg-zinc-900 min-h-screen'>
     
          <div className=" flex flex-row justify-evenly sm:mt-12 mt-8">
            <div className=" bg-gray-800 w-3/12 h-96 overflow-y-scroll overflow-x-hidden hidden sm:block p-4 rounded-2xl">
              <div className="w-full text-center font-bold text-xl m-2 text-white">You may Know them</div>
              <div className="w-full h-0.5 bg-gray-100"></div>
              <div className="">
                {suggestion.map((e, index) => (
                  <Usersuggestion info={e} key={index} />
                ))}
              </div>
            </div>
            <div className=" sm:w-4/12 w-10/12">
              <Postsection />
            </div>
            <div className=" bg-green-500 w-3/12 hidden sm:block">latest news</div>
          </div>
        
       
    </div>
  )
}
export default Home
