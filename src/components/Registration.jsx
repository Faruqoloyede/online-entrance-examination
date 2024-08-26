import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Registration = () => {
    const [value, setValue] = useState({
        name: '',
        email: '',
        Number: '',
        password: ''
    })

    const navigate = useNavigate();
    const changeValue = (e)=>{
        const { name, value } = e.target;
        setValue((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
    }

    
    const information = collection(db, 'user');
    const handledata = async (e)=>{
        e.preventDefault();
        // try{
        //     await addDoc(information, {
        //         name: value.name,
        //         email: value.email,
        //         Number: value.Number,
        //         password: value.password
        //     })
        //     navigate('/exam')
        // }catch(err) {
        //     console.log(err);
            
        // }

        const {email, password} = value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((usercredential)=>{
            window.alert('successful')
        })
        .catch((err)=>{
            console.log(err)
            
        })
        
    }

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
                    <form className='bg-white w-[50%] px-4 py-12' onSubmit={handledata}>
                        <h4 className='text-xl text-center mb-5'>Register Now</h4>
                        <div className='mb-5'>
                            <input type="text" placeholder='fullname' name='name' className='border border-[#CCCCCC] outline-[#91BBDD] px-4 py-2 rounded-sm w-full placeholder:text-[18px]' value={value.name} onChange={changeValue} />
                        </div>
                        <div className='mb-5'>
                            <input type="email" name='email' placeholder='Email' className='border border-[#CCCCCC] outline-[#91BBDD] px-4 py-2 rounded-sm w-full placeholder:text-[18px]' value={value.email} onChange={changeValue} />
                        </div>
                        <div className='mb-5'>
                            <input type="number" name='number' placeholder='contact' className='border border-[#CCCCCC] outline-[#91BBDD] px-4 py-2 rounded-sm w-full placeholder:text-[18px]' value={value.contact} onChange={changeValue} />
                        </div>
                        <div className='mb-5'>
                            <input type="password" name='password' placeholder='password' className='border border-[#CCCCCC] outline-[#91BBDD] px-4 py-2 rounded-sm w-full placeholder:text-[18px]' value={value.password} onChange={changeValue} />
                        </div>
                        <button type='submit' className='bg-[#CD413D] text-xl mt-10 w-full py-4 text-white font-medium'>Register</button>
                        <div className='flex flex-col items-center justify-center'>
                        <span>or</span>
                        <NavLink to={'/login'}>Login</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration