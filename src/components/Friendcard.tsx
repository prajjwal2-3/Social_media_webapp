import React,{useEffect, useState} from 'react'
import { Button } from "@mui/material";
import axios from 'axios'
const Friendcard = ({info}) => {
    interface forfriend {
        username: string,
        _id: String,
        password: string,
        information:string,
        post:any[]
        __v:number
    }
    const [friend,setfriend] = useState<any>({})
    useEffect(() => {
        const fetchFriendData = async () => {
          try {
            const headers = {
              'userid': info
            };
    
            const response = await axios.get('https://social-backend-navy.vercel.app/user/userinfo', {
              headers: headers
            });
    
            setfriend(response.data);
          } catch (error) {
            console.error('Error fetching friend data:', error);
          }
        };
    
        fetchFriendData();
      }, []);
console.log(friend)

function handleclick(){
  

    let username= sessionStorage.getItem("username");
    let password = sessionStorage.getItem("password");
    let userid = info
     const headers={
      'username':username,
      'password':password,
      'userid':userid
     }
    
   
    function sendrequest(){
     
      axios.post('https://social-backend-navy.vercel.app/user/acceptrequest',{description:'nothing'},{
        headers:headers
      }).then((Response)=>{alert(Response.data);console.log(Response)})
    }
sendrequest()
  }
  return (
    
    <div className='rounded-lg bg-gray-600 mx-2 my-3 p-2 shadow-md flex justify-between items-center'>
    <div className="flex items-center">
    <div className="w-8 h-8 rounded-full bg-gray-500 shadow-lg mr-2"></div>
    <div className="flex flex-col">
    <div className="text-white">{friend?.username}</div>
    <div className="text-white text-xs">{friend?.information}</div>
    </div>
    </div>
    <div className="">
    <Button
            variant="contained"
            size="small"
            onClick={handleclick}
          >
        
            Accept
          </Button>
    </div>
   
    </div>
  )
}

export default Friendcard
