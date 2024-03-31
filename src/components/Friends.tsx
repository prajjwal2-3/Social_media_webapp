import React from 'react'
import { useSelector } from 'react-redux'
import Usersuggestion from './Usersuggestion.tsx'
import SimpleBottomNavigation from './Bottomnav.tsx'
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
      if(suggestion===null) return <div className="">loading....</div>
  return (
    <div className='h-screen bg-gray-800 flex flex-col'>
      <div className="  w-full  overflow-y-scroll overflow-x-hidden  p-4 ">
              <div className="w-full text-center font-bold text-xl m-2 text-white">You may Know them</div>
              <div className="w-full h-0.5 bg-gray-100"></div>
              <div className="">
                {suggestion.map((e, index) => (
                  <Usersuggestion info={e} key={index} />
                ))}
              </div>
            </div>
           <div> <SimpleBottomNavigation/></div>
    </div>
  )
}

export default Friends
