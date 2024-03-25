import React, { useEffect } from 'react'
import Addpost from './Addpost.tsx'
import Postcard from './Postcard.tsx'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { addpostlist } from '../utils/Postslice.ts'

const Postsection = () => {
  interface RootState {
    post: {
        map(arg0: (e: any, index: any) => React.JSX.Element): React.ReactNode
       
        postlist: {
          reverse(): unknown
          slice():any
          map: any
          discription:string,
          user_id:string,
          _id:string,
          __v:number,
         
        }
    }

}
  const dispatch = useDispatch();
  
  var postdata = useSelector((state:RootState)=>state?.post?.postlist)

  useEffect(()=>{
    axios.get('https://social-backend-navy.vercel.app/user/post').then((response)=>{
      // console.log(response.data.Post)
      dispatch(addpostlist(response.data.Post))
    })
  },[])
  if(!postdata) return <div>Loading.....</div>
 var post = postdata.slice().reverse()
  

  return (
    <div className='h-screen overflow-y-scroll' >
     <Addpost/>
    
     <div className="my-4 font-bold text-xl text-white">Recent Posts</div>
  
  {
    postdata? post.map((e,index)=>(<Postcard info={e} key={index}/>)):""
  }
    </div>
  )
}

export default Postsection
