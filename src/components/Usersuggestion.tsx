import React from 'react'
interface UserSuggestionInfo {
  username: string,
_id: String,
password: string,
information:string,
post:any[]
__v:number
}
const Usersuggestion = ({info}) => {
  
  return (
    
    <div className='rounded-lg bg-white mx-2 my-3 p-2 flex justify-between items-center'>
    <div className="flex items-center">
    <div className="w-8 h-8 rounded-full bg-gray-500 mr-2"></div>
    <div className="flex flex-col">
    <div className="">{info?.username}</div>
    <div className="">{info?.information}</div>
    </div>
    </div>
    <div className="h-8 w-16 bg-green-500 rounded-lg p-0.5 cursor-pointer hover:bg-green-600 ">
      <p className=''>Connect</p>
    </div>
   
    </div>

  )
}

export default Usersuggestion