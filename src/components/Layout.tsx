import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Browse from './Home.tsx'
import Friends from './Friends.tsx'
import News from './News.tsx'
import PrimarySearchAppBar from './Header1.tsx'
const Layout = () => {
  return (
   <div className='bg-zinc-900'>
    <PrimarySearchAppBar/>
  <Routes>
    <Route index element={<Browse/>}></Route>
    <Route path='/Home' element={<Browse/>}></Route>
    <Route path='/Friends' element={<Friends/>}></Route>
    <Route path='/News' element={<News/>}></Route>
  </Routes>
  </div>
  )
}

export default Layout
