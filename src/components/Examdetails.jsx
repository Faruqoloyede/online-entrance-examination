import React from 'react'
import { NavLink } from 'react-router-dom'
import { quizData } from '.'

const Examdetails = () => {



  return (
    <section>
        
        <div className='flex justify-center items-center w-full bg-[#202020] sm:px-16 px-6'>
            <div className='xl:max-w-[1280px] w-full'>
                <nav  className='flex items-center justify-between px-16 w-full py-6 '>
                <span className='text-white font-bold text-2xl'>online exam</span>
                <ul className='list-none flex items-center gap-10 text-white text-[18px] cursor-pointer'>
                  <p>Hello, Faruq oloyede</p>
                  <NavLink to={'/'}>Logout</NavLink>
              </ul>
                </nav>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className='flex flex-col  bg-gray-500 shadow-md min-w-[400px] p-6 rounded-[12px]'>
                
                <h4 className='text-white text-[20px] font-medium text-left mb-3'>Question 1:</h4>
                <div className='flex flex-col'>
                    <p className='text-white font-medium text-xl mb-4'>what is the sum of 4 + 4</p>
                    <ul className="list-none flex flex-col gap-5 cursor-pointer">
                        <li className='border border-gray-400 p-2 text-white font-medium text-[18px] text-center'>4</li>
                        <li className='border border-gray-400 p-2 text-white font-medium text-[18px] text-center'>2</li>
                        <li className='border border-gray-400 p-2 text-white font-medium text-[18px] text-center'>3</li>
                        <li className='border border-gray-400 p-2 text-white font-medium text-[18px] text-center'>8</li>
                    </ul>
                    <div className='flex items-center justify-center mt-5'>
                        <button className='bg-[#148496] px-4 py-2 text-white font-medium rounded-[10px]'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Examdetails