import React from 'react'
import PrimarySearchAppBar from './Header1.tsx'
const Browse = () => {
  return (
    <div>
      <div>
        <PrimarySearchAppBar/>
        <button className='bg-blue-500 p-2 m-4 rounded-lg'>See all user</button>
      </div>
    </div>
  )
}

export default Browse
