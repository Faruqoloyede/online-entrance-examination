import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-16 w-full py-6 '>
        <span className='text-white font-bold text-2xl'>online exam</span>
        <ul className='list-none flex items-center gap-10 text-white text-[18px] cursor-pointer'>
            <NavLink to={'/admin-login'}>Admin login</NavLink>
            <NavLink>Developer</NavLink>
        </ul>
        <NavLink to={'/login'} className='bg-[#148496] px-4 py-2 text-white font-medium rounded-[10px]'>Login</NavLink>
    </nav>
  )
}

export default Navbar