import React, { useEffect, useState } from 'react'
import './Login.css'
import '../../Styles/Global.css'
import Aura from '../../assets/images/Aura.png'
import google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import twitter from '../../assets/images/twitter.png'
import { useNavigate } from 'react-router-dom'
import { BackgroundBeams } from '../../Components/ui/BackgroundBeams'
import axios from 'axios'
const {authService} = require('../../Services/authService')
import { ErrorCard, SuccessCard } from '../../Components/Cards/NotificationCard/NotificationCard';

const Login = () => {
    const navigate =useNavigate();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [apiStatus, setApiStatus] = useState(null);


    const handleSubmit= async(e)=>{
        e.preventDefault();
        const data = await authService.login({ userEmail:email, password });

        if (data) {
            console.log('Logged in successfully:', data);
            setApiStatus('success')
            navigate('/HomePage');
        } else {
         setApiStatus("error")
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setApiStatus(null);
        }, 3000); // 3 seconds
    
        return () => clearTimeout(timer); 
    }, [apiStatus]);
    
  
    return (
        <>
          {apiStatus === 'success' && <SuccessCard />}
          {apiStatus === 'error' && <ErrorCard />}
         
            <div className='w-screen h-screen flex flex-row z-10 absolute'>
            <div className='w-full md:w-2/5 flex justify-center items-center px-5 py-5 md:px-10 md:py-10'>     
                <div className='w-full h-full flex flex-col items-center justify-center rounded-lg backdrop-blur-sm bg-[#2b2b2b2f]'>
                    <div className='w-full md:w-4/5 flex flex-col items-center gap-3'>
                       
                            <img className='foreground w-[50vw] md:w-[20vw] h-auto' src={Aura} alt="" />
                     
                        <h2 className='font-bold text-[30px]'>Welcome back</h2>
                        <p className='text-[#F0F8FF]'>Please enter your details for sign in.</p>
                        <div className='flex flex-row gap-5 '>
                            <button className='outlineButton'><img className='w-6 h-6' src={apple} alt="" /></button>
                            <button className='outlineButton'><img className='w-6 h-6' src={google} alt="" /></button>
                            <button className='outlineButton'><img className='w-6 h-6' src={twitter} alt="" /></button>
                        </div>
                    </div>
                    <div className='flex flex-row' >
                        <p className='seprator'>OR</p>
                    </div>
                    <form onSubmit={handleSubmit} className='w-full md:w-4/5 flex flex-col gap-2 px-3' action="">
                        <div className='formFieldDiv'>
                            <label className='formLabel' htmlFor="email">E-mail Address<sup>*</sup></label>
                            <input onChange={(e)=>setEmail(e.target.value)} className='formInput' type='email' name="email" id="email" placeholder='Enter your email .....' />
                        </div>
                        <div className='formFieldDiv'>
                            <label className='formLabel' htmlFor="password" >Password<sup>*</sup></label>
                            <input onChange={(e)=>setPassword(e.target.value)} className='formInput placeholder:text-2xl' type="password" name="password" id="password" placeholder='••••••••' />
                        </div>
                        <div className='flex flex-row justify-between'>
                               <div className='flex flex-row gap-1'>
                               <input className='checkbox' type="checkbox" name="Remember" id="Remember" />
                               <label className='checkboxLabel' htmlFor="Remember">Remember me</label>
                               </div>
                               <div>
                                <a className=' underline' href="#">Forgot password?</a>
                               </div>
                        </div>
                        <button className='bg-[#7b2cbf] text-[#fff] px-[4px] py-[5px] rounded-md text-lg font-semibold mt-4'>Sign in</button>
                        <div className='flex flex-row items-center justify-center gap-2 mt-2'>
                            <p className='text-[#F0F8FF]'>Don't have an account yet?</p>
                            <button onClick={()=>navigate('/')} className=' font-semibold' >Sign up</button>

                        </div>
                    </form>
                </div>
                </div>
                <div className='hidden w-3/5 h-full md:flex flex-col items-center rightside'>
                    <div className='w-3/6 h-1/4 mt-20'>
                        <p className=' text-left font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam perferendis earum optio ipsum tempora ut quam possimus voluptates.</p>
                    </div>
                    <div className='w-full  flex items-end justify-end'>
                        <div className='w-3/4 h-[70vh] landing'></div>
                    </div>
                </div>
            </div>
             
               <BackgroundBeams/>
              

        </>
    )
}

export default Login

