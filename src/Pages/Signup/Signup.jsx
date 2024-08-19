import React, { useState } from 'react'
import { IonIcon } from '@ionic/react';
import { checkmarkCircleOutline} from 'ionicons/icons';
import flag from '../../assets/images/flag.png'
import google from '../../assets/images/google.png'
import './Signup.css';
import '../../Styles/Global.css'
import { Outlet, useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate =useNavigate()
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
                <div className=' hidden w-2/5 h-screen bg-[#010B13] md:flex flex-col justify-center items-center'>
                <div>
                    <img className='w-16 h-16' src={google} alt="" />
                </div>
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
                        <div className='flex flex-row items-center gap-2' >
                            <p>Already have an account?</p><button onClick={()=>navigate('/login')}>Login</button>
                        </div>
                    </div>
                    <div className='w-full my-10 px-10 flex flex-row justify-between'>
                    <img className='w-16 h-16' src={google} alt="" />
                    <img className='w-16 h-16' src={google} alt="" />
                    </div>
                </div>
                <div className='flex items-center w-screen md:w-3/5 h-screen flex-col bg-[#1B1B1B] p-5 md:p-0'>
                <>
                <Outlet/>
                </>
                   
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

{/* <div className='formFieldDiv'>
<label className='formLabel' htmlFor="password" >Password*</label>
<input className='formInput' type="password" name="password" id="password" placeholder='' />
</div>
<div className='formFieldDiv'>
<label className='formLabel' htmlFor="confirmPassword">Confirm Password*</label>
<input className='formInput' type="text" name="confirmPassword" id="confirmPassword" />
</div> */}