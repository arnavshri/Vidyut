import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='w-full min-h-[100vh] grid grid-cols-[1fr_4.8fr]'>
        <Sidebar/>
        <div>{children}</div>
    </div>
  )
}

export default Layout