import React,{useEffect} from 'react'
import { Button } from "@mui/material";
import axios from 'axios'
const Friendcard = ({info}) => {
const headers={
'userid':info
}
 const friend = axios.get('https://social-backend-navy.vercel.app/user/userinfo',{
        headers:headers
    }).then((Response)=>{return Response.data}
)
console.log(friend)

  return (
    
    <div className='rounded-lg bg-gray-600 mx-2 my-3 p-2 shadow-md flex justify-between items-center'>
    <div className="flex items-center">
    <div className="w-8 h-8 rounded-full bg-gray-500 shadow-lg mr-2"></div>
    <div className="flex flex-col">
    {/* <div className="text-white">{info?.username}</div> */}
    {/* <div className="text-white text-xs">{info?.information}</div> */}
    </div>
    </div>
    <div className="">
    <Button
            variant="contained"
            size="small"
            // onClick={handleclick}
          >
            {/* {connect} */}
            accept
          </Button>
    </div>
   
    </div>
  )
}

export default Friendcard
