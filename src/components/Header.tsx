import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector } from 'react-redux'
const Header = () => {
    const navigate = useNavigate()
    interface Rootstate{
        user:{
          user:any[]
        };
      }
    const isuser = useSelector((state:Rootstate)=>state.user.user)
    if(isuser){
        navigate('/browse')
        }
  return (
    <div>
      
    </div>
  )
}

export default Header
