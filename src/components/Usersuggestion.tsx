import React, { useState } from 'react'
import axios from 'axios'
interface UserSuggestionInfo {
  username: string,
_id: String,
password: string,
information:string,
post:any[]
__v:number
}
interface prop{
  
}
const Usersuggestion = ({info}) => {
  const [connect,setconnect]=useState("Connect");
  function handleclick(){
  

    let username= sessionStorage.getItem("username");
    let password = sessionStorage.getItem("password");
    let userid = info?._id
     const headers={
      'username':username,
      'password':password,
      'userid':userid
     }
     connect==="Connect"?sendrequest():alert('Request already sent')
   
    function sendrequest(){
      setconnect("Sent")
      axios.post('https://social-backend-navy.vercel.app/user/sendrequest',{description:'nothing'},{
        headers:headers
      }).then((Response)=>{alert(Response.data);console.log(Response)})
    }

  }
  return (
    
    <div className='rounded-lg bg-gray-600 mx-2 my-3 p-2 shadow-md flex justify-between items-center'>
    <div className="flex items-center">
    <div className="w-8 h-8 rounded-full bg-gray-500 shadow-lg mr-2"></div>
    <div className="flex flex-col">
    <div className="text-white">{info?.username}</div>
    <div className="text-white text-xs">{info?.information}</div>
    </div>
    </div>
    <div className="h-8 w-16 bg-green-500 rounded-lg text-center p-0.5 cursor-pointer hover:bg-green-600 ">
      <button onClick={handleclick} className='' >{connect}</button>
    </div>
   
    </div>

  )
}

export default Usersuggestion
