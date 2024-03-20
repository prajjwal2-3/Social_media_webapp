import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {useSelector } from 'react-redux'
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    interface Rootstate{
        user:{
          user:any[]
        };
      }
    const isuser = useSelector((state:Rootstate)=>state.user.user)
    
        useEffect(()=>{
            if (!isuser) {
             
                navigate("/login");
                   } else if( isuser) {
                   
                     navigate("/browse")
                   }
        },[location.pathname, isuser, navigate])
  return null
}

export default Header
