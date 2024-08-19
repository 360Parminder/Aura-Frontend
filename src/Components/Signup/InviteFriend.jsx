import React from 'react'
import '../../Styles/Global.css'
import invite from '../../assets/images/invite.png'
import { useNavigate } from 'react-router-dom'
const InviteFriend = () => {

    const navigate=useNavigate()
    function handleSubmit(e){
        // alert('Form submitted');
        e.preventDefault();
        navigate('/socials')
        
    }
  return (
    <>
     <div className=' text-center flex flex-col items-center w-full md:w-2/5 gap-3 mt-12'>
                <img className='w-16 h-16' src={invite} alt="" />
                <h2 className=' font-bold text-[30px]'>
                    Invite your friends
                </h2>
                <p className=' text-[#F0F8FF]'>Start Watchlist with your friends.</p>
                {/* <button className='px-[4px] py-[10px] rounded-md border w-full border-gray-500 font-bold flex gap-5 items-center justify-center'> <img className='w-6 h-6' src={google} alt="" /> Sign up with Google</button> */}
            </div>
            <form onSubmit={handleSubmit} className='w-full md:w-2/5 gap-2 flex flex-col' action="">
                <div className='formFieldDiv gap-2'>
                    <label className='formLabel' htmlFor="email" >Email address</label>
                    <input className='formInput' type="email" name="email" id="email" placeholder='Enter an email address' />
                    <input className='formInput' type="email" name="email" id="email" placeholder='Enter an email address' />
                    <input className='formInput' type="email" name="email" id="email" placeholder='Enter an email address' />
                </div>
               
                <button className='bg-[#7b2cbf] text-[#fff] px-[4px] py-[5px] rounded-md text-lg font-semibold mt-4' >Continue</button>
            </form>
    </>
  )
}

export default InviteFriend