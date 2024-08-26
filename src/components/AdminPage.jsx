import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminPage = () => {
  
  return (
    <section>
      <div className='flex justify-center items-center w-full bg-[#202020] sm:px-16 px-6'>
            <div className='xl:max-w-[1280px] w-full'>
                <nav  className='flex items-center justify-between px-16 w-full py-6 '>
                <span className='text-white font-bold text-2xl'>online exam</span>
                <ul className='list-none flex items-center gap-10 text-white text-[18px] cursor-pointer'>
                  <p>Hello, Admin</p>
                  <NavLink to={'/'}>Logout</NavLink>
              </ul>
                </nav>
            </div>
        </div>
        <div className='flex justify-center items-center w-full bg-white shadow-md h-[50px] sm:px-16 px-6'>
        <div className='xl:max-w-[1280px] w-full'>
             <div className='flex items-center gap-24'>
             <NavLink to={'/admin'}>Home</NavLink>
              <NavLink to={'/users'}>Users</NavLink>
              <NavLink to={'/addexam'}>AddExam</NavLink>
             </div>
            </div>
        </div>
        
        <div className='flex flex-col items-center justify-center mt-20'>
         <table className='content bg-white shadow-md'>
          <thead>
            <tr>
              <th className='p[12'>S/N</th>
              <th>Subject</th>
              <th>Total questions</th>
              <th>Time limit</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>mathematics</td>
              <td>5</td>
              <td>20 min</td>
              <td>delete</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>1</td>
              <td>mathematics</td>
              <td>5</td>
              <td>20 min</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>1</td>
              <td>mathematics</td>
              <td>5</td>
              <td>20 min</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>1</td>
              <td>mathematics</td>
              <td>5</td>
              <td>20 min</td>
            </tr>
          </tbody>
         </table>
        </div>
    </section>
  )
}

export default AdminPage