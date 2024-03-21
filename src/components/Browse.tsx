import React from 'react'
import PrimarySearchAppBar from './Header1.tsx'
const Browse = () => {
  return (
    <div>
       <PrimarySearchAppBar/>
      <div className="div flex flex-row justify-evenly sm:mt-12 mt-8">
        <div className="bg-red-400 w-3/12 hidden sm:block">you may know them</div>
        <div className="div bg-blue-500 sm:w-4/12 w-10/12">add post</div>
        <div className="div bg-green-500 w-3/12 hidden sm:block">latest news</div>
      </div>
    </div>
  )
}

export default Browse
