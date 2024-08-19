import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import rocket from '../../assets/images/rocket.png'
import '../../Styles/Global.css'
import { IonIcon } from '@ionic/react';
import { checkmarkCircleOutline} from 'ionicons/icons';

const Socials = () => {
    const navigate = useNavigate()
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    
    
    function handleSubmit(e){
        e.preventDefault();
    }
  return (
   <>
   <div className=' text-center flex flex-col items-center w-full md:w-2/5 gap-3 mt-12'>
                        <img className='w-16 h-16' src={rocket} alt="" />
                        <h2 className=' font-bold text-[30px]'>
                        Add your socials
                        </h2>
                        <p className=' text-[#F0F8FF]'>Share posts to your social accounts.</p>
                        {/* <button className='px-[4px] py-[10px] rounded-md border w-full border-gray-500 font-bold flex gap-5 items-center justify-center'> <img className='w-6 h-6' src={google} alt="" /> Sign up with Google</button> */}
                    </div>
                    {/* <div className='flex flex-row' >
                        <p className='seprator'>OR</p>
                    </div> */}
                    <form onSubmit={handleSubmit} className='w-full md:w-2/5 gap-2 flex flex-col' action="">
                    <div className='formFieldDiv '>
                    <label className='formLabel' htmlFor="social" >Twitter</label>
                    <input className='formInput' type="social" name="social" id="email" placeholder='Add Social' />
                 </div>
                 <div className='formFieldDiv '>
                    <label className='formLabel' htmlFor="social" >Facebook</label>
                    <input className='formInput' type="social" name="social" id="email" placeholder='Add Social' />
                 </div>
                 <div className='formFieldDiv'>
                    <label className='formLabel' htmlFor="social" >Instagram</label>
                    <input className='formInput' type="social" name="social" id="email" placeholder='Add Social' />
                 </div>
                        <button type='submit' className='bg-[#7b2cbf] text-[#fff] px-[4px] py-[5px] rounded-md text-lg font-semibold mt-4' >Complete sign up</button>
                    </form>
   </>
  )
}

export default Socials