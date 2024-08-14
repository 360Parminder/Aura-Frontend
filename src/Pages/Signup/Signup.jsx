import React, { useState } from 'react'
import { IonIcon } from '@ionic/react';
import { checkmarkCircleOutline} from 'ionicons/icons';
import flag from '../../assets/images/flag.png'
import google from '../../assets/images/google.png'
import './Signup.css';
import '../../Styles/Global.css'
const Signup = () => {
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    
    function handleSubmit(e){
        alert('Form submitted');
        e.preventDefault();
    }
    return (
        <>
            <div className='md:flex flex-row'>
                <div className=' hidden w-2/5 h-screen bg-[#010B13] md:flex justify-center items-center'>
                    <div className='flex flex-col gap-7'>
                        <div className='flex flex-row items-center gap-2'>
                            <IonIcon icon={checkmarkCircleOutline} className="text-[35px] text-[#007FFF]" />
                            <div>
                            <p className='font-bold text-xl'>Your details</p>
                            <p className=' font-medium'>Please provide your name and email</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                        <IonIcon icon={checkmarkCircleOutline} className="text-[35px]" />
                            <div>
                            <p className='font-bold text-xl'>Choose a password</p>
                            <p className=' font-medium'>Must be at least 8 characters</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                        <IonIcon icon={checkmarkCircleOutline} className="text-[35px]" />
                            <div>
                            <p className='font-bold text-xl'>invite your friends</p>
                            <p className=' font-medium'>Start watching with your friends</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                        <IonIcon icon={checkmarkCircleOutline} className="text-[35px]" />
                            <div>
                            <p className='font-bold text-xl'>Add your socials</p>
                            <p className=' font-medium'>Share posts to your social accounts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-screen md:w-3/5 h-screen flex-col bg-[#1B1B1B] p-5 md:p-0'>
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
                        <button className='bg-[#7b2cbf] text-[#fff] px-[4px] py-[5px] rounded-md text-lg font-semibold mt-4' >Continue</button>
                    </form>
                    <div className='flex gap-4 mt-16'>
                        <p className='progress' style={{backgroundColor:'#7b2cbf'}}></p>
                        <p className='progress'></p>
                        <p className='progress'></p>
                        <p className='progress'></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup
//for password page

// <div className='formFieldDiv'>
// <label className='formLabel' htmlFor="password" >Password*</label>
// <input className='formInput' type="password" name="password" id="password" placeholder='' />
// </div>
// <div className='formFieldDiv'>
// <label className='formLabel' htmlFor="confirmPassword">Confirm Password*</label>
// <input className='formInput' type="text" name="confirmPassword" id="confirmPassword" />
// </div>