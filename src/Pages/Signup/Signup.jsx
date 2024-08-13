import React, { useState } from 'react'
import { IonIcon } from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';
import './Signup.css';
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
            <div className='flex flex-row'>
                <div className='w-2/5 h-screen bg-[#010B13] flex justify-center items-center'>
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
                <div className='flex items-center  w-3/5 h-screen flex-col bg-[#1B1B1B]'>
                    <div className=' text-center flex flex-col items-center w-2/5 gap-3 mt-12'>
                        <img className='w-10 h-10' src='/src/assets/images/flag.png' alt="" />
                        <h2 className=' font-bold text-[30px]'>
                            Your Details
                        </h2>
                        <p className=' text-[#F0F8FF]'>Please provide your name and email</p>
                        <button className='px-[4px] py-[10px] rounded-md border w-full border-gray-500 font-bold flex gap-5 items-center justify-center'> <img className='w-6 h-6' src="/src/assets/images/flag.png" alt="" /> Sign up with Google</button>
                    </div>
                    <div className='flex flex-row' >
                        <p className='seprator'>OR</p>
                    </div>
                    <form onSubmit={handleSubmit} className='w-2/5 gap-2 flex flex-col' action="">
                        <div className='flex flex-col'>
                            <label className='inputLabel' for="name">Name*</label>
                            <input className='inputField' type="text" id="name" name="name" placeholder='Enter your first name' required />
                        </div>
                        <div className='flex flex-col'>
                            <label className='inputLabel' for="lastname">Last Name*</label>
                            <input className='inputField' type="text" id="lastname" name="lastname" placeholder='Enter your last name' required />
                        </div>
                        <div className='flex flex-col'>
                            <label className='inputLabel' for="email">Email*</label>
                            <input className='inputField' type="email" id="email" name="email" placeholder='Enter you last name' required />

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