import React from 'react'
import { NavLink } from 'react-router-dom'
import { quizData } from '.'
const Exam = () => {
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
          <h1 className='text-[48px] font-medium'>Available subject</h1>
          <p className='text-black text-[18px]'>please choose subject to answer</p>
          <div className='flex flex-col mt-10 bg-gray-300 border shadow-md w-[400px] px-6 py-4'>
            <ul className="list-none">
              {quizData.map((data)=>(
                  <li className='mb-5 text-[20px] font-bold flex items-center justify-between'>
                  {data.subject}
                  <button className='bg-green text-white px-4 py-2 rounded-md'>Start</button>
                </li>
              ))}
              
              {/* <li className='mb-5 text-[20px] font-bold flex items-center justify-between'>
                mathematics
                <button className='bg-green text-white px-4 py-2 rounded-md'>Start</button>
              </li>
              <li className='mb-5 text-[20px] font-bold flex items-center justify-between'>
                mathematics
                <button className='bg-green text-white px-4 py-2 rounded-md'>Start</button>
              </li> */}
              
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Exam