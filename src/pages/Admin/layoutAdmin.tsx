import React from 'react'
import Sidebar from '../../components/sidebar'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <div>
        <div className='flex'>
            <div className='w-1/4'>
            <Sidebar/>
            </div>
            
            <div className='w-3/4'>
            <Outlet/> 
            </div>
        </div>
    </div>
  )
}

export default LayoutAdmin
