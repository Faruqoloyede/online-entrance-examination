import React from 'react'
import Navbar from './Navbar'

const AdminLogin = () => {
  return (
    <>
    <div className='flex justify-center items-center w-full bg-[#202020] sm:px-16 px-6'>
        <div className='xl:max-w-[1280px] w-full'>
            <Navbar />
        </div>
    </div>
    <div className='flex justify-center items-start h-[90vh] registeration overflow-hidden'>
        <div className='xl:max-w-[1280px] w-full'>
            <div className='flex items-center justify-end sm:px-16 px-6 py-16'>
                <form className='bg-white w-[50%] px-4 py-12'>
                    <h4 className='text-xl text-center mb-5'>Login as Admin</h4>
                    <div className='mb-5'>
                        <input type="email" name='email' placeholder='eEmail' className='border border-[#CCCCCC] outline-[#91BBDD] px-4 py-2 rounded-sm w-full placeholder:text-[18px]' />
                    </div>
                    <div className='mb-5'>
                        <input type="password" name='password' placeholder='password' className='border border-[#CCCCCC] outline-[#91BBDD] px-4 py-2 rounded-sm w-full placeholder:text-[18px]' />
                    </div>
                    <button className='bg-[#CD413D] text-xl mt-10 w-full py-4 text-white font-medium'>Login</button>
                </form>
            </div>
        </div>
    </div>
</>
  )
}

export default AdminLogin