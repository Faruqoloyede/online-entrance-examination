// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const AddExam = () => {
//   return (
//     <section>
//           <div className='flex justify-center items-center w-full bg-[#202020] sm:px-16 px-6'>
//             <div className='xl:max-w-[1280px] w-full'>
//                 <nav  className='flex items-center justify-between px-16 w-full py-6 '>
//                 <span className='text-white font-bold text-2xl'>online exam</span>
//                 <ul className='list-none flex items-center gap-10 text-white text-[18px] cursor-pointer'>
//                   <p>Hello, Admin</p>
//                   <NavLink to={'/'}>Logout</NavLink>
//               </ul>
//                 </nav>
//             </div>
//         </div>
//         <div className='flex justify-center items-center w-full bg-white shadow-md h-[50px] sm:px-16 px-6'>
//         <div className='xl:max-w-[1280px] w-full'>
//              <div className='flex items-center gap-24'>
//              <NavLink to={'/admin'}>Home</NavLink>
//               <NavLink to={'/users'}>Users</NavLink>
//               <NavLink to={'/addexam'}>AddExam</NavLink>
//              </div>
//             </div>
//         </div>
//         <div className='flex flex-col items-center justify-center'>
//             <h1 className='text-center font-medium text-xl mt-4'>Enter Questions details</h1>
//             <form className='mt-10'>
//                 <input type="text" placeholder='Enter name of subject' className='border border-[#CCCCCC] px-4 py-3 w-full' />
//                 <div className='mb-5'>
//                     <div className='flex flex-col gap-3 mb-5'>
//                         <label htmlFor="text" className='text-[18px] font-medium'>Question 1</label>
//                         <textarea name="text" id="text" className='border border-[#CCCCCC] h-[100px] w-[500px]'></textarea>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                         <input type="text" placeholder='Enter option a' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option b' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option c' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option d' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter correct option' className='border border-[#CCCCCC] px-4 py-3' />
//                     </div>
//                 </div>
//                 <div className='mb-5'>
//                     <div className='flex flex-col gap-3 mb-5'>
//                         <label htmlFor="text" className='text-[18px] font-medium'>Question 2</label>
//                         <textarea name="text" id="text" className='border border-[#CCCCCC] h-[100px] w-[500px]'></textarea>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                         <input type="text" placeholder='Enter option a' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option b' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option c' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option d' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter correct option' className='border border-[#CCCCCC] px-4 py-3' />
//                     </div>
//                 </div>
//                 <div className='mb-5'>
//                     <div className='flex flex-col gap-3 mb-5'>
//                         <label htmlFor="text" className='text-[18px] font-medium'>Question 3</label>
//                         <textarea name="text" id="text" className='border border-[#CCCCCC] h-[100px] w-[500px]'></textarea>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                         <input type="text" placeholder='Enter option a' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option b' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option c' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option d' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter correct option' className='border border-[#CCCCCC] px-4 py-3' />
//                     </div>
//                 </div>
//                 <div className='mb-5'>
//                     <div className='flex flex-col gap-3 mb-5'>
//                         <label htmlFor="text" className='text-[18px] font-medium'>Question 4</label>
//                         <textarea name="text" id="text" className='border border-[#CCCCCC] h-[100px] w-[500px]'></textarea>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                         <input type="text" placeholder='Enter option a' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option b' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option c' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option d' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter correct option' className='border border-[#CCCCCC] px-4 py-3' />
//                     </div>
//                 </div>
//                 <div className='mb-5'>
//                     <div className='flex flex-col gap-3 mb-5'>
//                         <label htmlFor="text" className='text-[18px] font-medium'>Question 5</label>
//                         <textarea name="text" id="text" className='border border-[#CCCCCC] h-[100px] w-[500px]'></textarea>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                         <input type="text" placeholder='Enter option a' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option b' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option c' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter option d' className='border border-[#CCCCCC] px-4 py-3' />
//                         <input type="text" placeholder='Enter correct option' className='border border-[#CCCCCC] px-4 py-3' />
//                     </div>
//                 </div>
//                 <button className='bg-[#2E6EA6] px-4 py-3 mb-3 w-full text-white font-medium'>Submit</button>
//             </form>
//         </div>
//     </section>
//   )
// }

// export default AddExam

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AddExam = () => {
  const [subject, setSubject] = useState('');
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], correctOption: '' },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...questions];
    if (name.startsWith('option')) {
      const optionIndex = parseInt(name.split('-')[1], 10);
      updatedQuestions[index].options[optionIndex] = value;
    } else {
      updatedQuestions[index][name] = value;
    }
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctOption: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      subject,
      questions: questions.map((q, index) => ({
        ...q,
        id: index + 1, // Assigning an ID based on index
      })),
    };

    try {
      const docRef = await addDoc(collection(db, 'exams'), formattedData);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#202020] sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <nav className="flex items-center justify-between px-16 w-full py-6">
            <span className="text-white font-bold text-2xl">online exam</span>
            <ul className="list-none flex items-center gap-10 text-white text-[18px] cursor-pointer">
              <p>Hello, Admin</p>
              <NavLink to={'/'}>Logout</NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-white shadow-md h-[50px] sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <div className="flex items-center gap-24">
            <NavLink to={'/admin'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/addexam'}>AddExam</NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-medium text-xl mt-4">Enter Questions details</h1>
        <form className="mt-10" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name of subject"
            className="border border-[#CCCCCC] px-4 py-3 w-full mb-5"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {questions.map((question, index) => (
            <div key={index} className="mb-5">
              <div className="flex flex-col gap-3 mb-5">
                <label htmlFor={`question-${index}`} className="text-[18px] font-medium">
                  Question {index + 1}
                </label>
                <textarea
                  name="question"
                  id={`question-${index}`}
                  className="border border-[#CCCCCC] h-[100px] w-[500px]"
                  value={question.question}
                  onChange={(e) => handleInputChange(index, e)}
                ></textarea>
              </div>
              <div className="flex flex-col gap-3">
                {question.options.map((option, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Enter option ${String.fromCharCode(97 + i)}`}
                    className="border border-[#CCCCCC] px-4 py-3"
                    name={`option-${i}`}
                    value={option}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                ))}
                <input
                  type="text"
                  placeholder="Enter correct option"
                  className="border border-[#CCCCCC] px-4 py-3"
                  name="correctOption"
                  value={question.correctOption}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddQuestion}
            className="bg-[#2E6EA6] px-4 py-3 mb-3 w-full text-white font-medium"
          >
            Add Another Question
          </button>
          <button
            type="submit"
            className="bg-[#2E6EA6] px-4 py-3 mb-3 w-full text-white font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddExam;
