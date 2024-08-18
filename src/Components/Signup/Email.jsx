// import React from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import flag from '../../assets/images/flag.png'
import google from '../../assets/images/google.png'
const Email = () => {
    const navigate = useNavigate()
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    // console.log(firstName.length);
    
    
    function handleSubmit(e){
        // alert('Form submitted');
        e.preventDefault();
       navigate('password')
    }
  return (
    <>
     <div className=' text-center flex flex-col items-center w-full md:w-2/5 gap-3 mt-12'>
                        <img className='w-10 h-10' src={flag} alt="" />
                        <h2 className=' font-bold text-[30px]'>
                            Your Details
                        </h2>
                        <p className=' text-[#F0F8FF]'>Please provide your name and email</p>
                        <button className='px-[4px] py-[10px] rounded-md border w-full border-gray-500 font-bold flex gap-5 items-center justify-center'> <img className='w-6 h-6' src={google} alt="" /> Sign up with Google</button>
                    </div>
                    <div className='flex flex-row' >
                        <p className='seprator'>OR</p>
                    </div>
                    <form onSubmit={handleSubmit} className='w-full md:w-2/5 gap-2 flex flex-col' action="">
                        <div className='formFieldDiv'>
                            <label className='formLabel' for="name">Name*</label>
                            <input className='formInput' type="text" id="name" name="name" placeholder='Enter your first name' required />
                        </div>
                        <div className='formFieldDiv'>
                            <label className='formLabel' for="lastname">Last Name*</label>
                            <input className='formInput' type="text" id="lastname" name="lastname" placeholder='Enter your last name' required />
                        </div>
                        <div className='formFieldDiv'>
                            <label className='formLabel' for="email">Email*</label>
                            <input className='formInput' type="email" id="email" name="email" placeholder='Enter you last name' required />

                        </div>
                        <button type='submit' className='bg-[#7b2cbf] text-[#fff] px-[4px] py-[5px] rounded-md text-lg font-semibold mt-4' >Continue</button>
                    </form>
    </>
  )
}

export default Email