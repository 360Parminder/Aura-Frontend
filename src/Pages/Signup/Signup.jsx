import React, { useState } from 'react'
import { IonIcon } from '@ionic/react';
import { checkmarkCircleOutline} from 'ionicons/icons';
import logo from '../../assets/images/Aura.png'
import google from '../../assets/images/google.png'
import './Signup.css';
import '../../Styles/Global.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate =useNavigate();
    const location =useLocation();
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const [apiStatus, setApiStatus] = useState('error');
    return (
        <>
       
            <div className='md:flex flex-row'>
                <div className=' hidden w-2/5 h-screen bg-[#010B13] md:flex flex-col justify-between items-center'>
                <div className='flex w-full items-center justify-center my-10 '>
                    <img className='w-2/5 h-auto' src={logo} alt="" />
                </div>
                    <div className='flex flex-col gap-7'>
                        <div className='flex flex-row items-center gap-2'>
                            <IonIcon icon={checkmarkCircleOutline} className="text-[35px]" style={{color:`${location.pathname=='/'?'#7b2cbf':null}`}} />
                            <div>
                            <p className='font-bold text-xl'>Your details</p>
                            <p className=' font-medium'>Please provide your name and email</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                        <IonIcon icon={checkmarkCircleOutline} className="text-[35px]" style={{color:`${location.pathname=='/password'?'#7b2cbf':null}`}}  />
                            <div>
                            <p className='font-bold text-xl'>Choose a password</p>
                            <p className=' font-medium'>Must be at least 8 characters</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                        <IonIcon icon={checkmarkCircleOutline} className="text-[35px]" style={{color:`${location.pathname=='/inviteFriends'?'#7b2cbf':null}`}}  />
                            <div>
                            <p className='font-bold text-xl'>invite your friends</p>
                            <p className=' font-medium'>Start watching with your friends</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                        <IonIcon icon={checkmarkCircleOutline} className="text-[35px]" style={{color:`${location.pathname=='/Avatar'?'#7b2cbf':null}`}}  />
                            <div>
                            <p className='font-bold text-xl'>Add your socials</p>
                            <p className=' font-medium'>Share posts to your social accounts</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2' >
                            <p>Already have an account?</p><button onClick={()=>navigate('/login')}>Login</button>
                        </div>
                    </div>
                    <div className='w-full mb-4 px-10 flex flex-row justify-between'>
                    <p>© Aura 2024</p>
                    <a href="">360.Parminder@gmail.com</a>
                    </div>
                </div>
                <div className='flex items-center w-screen md:w-3/5 h-screen flex-col bg-[#1B1B1B] p-5 md:p-0'>
                <>
                <Outlet/>
                </>
                   
                    <div className='flex gap-4 mt-[5vh]'>
                        <p className='progress' style={{backgroundColor:`${location.pathname=='/'?'#7b2cbf':null}`}}></p>
                        <p className='progress' style={{backgroundColor:`${location.pathname=='/password'?'#7b2cbf':null}`}}></p>
                        <p className='progress' style={{backgroundColor:`${location.pathname=='/inviteFriends'?'#7b2cbf':null}`}}></p>
                        <p className='progress' style={{backgroundColor:`${location.pathname=='/Avatar'?'#7b2cbf':null}`}}></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup
