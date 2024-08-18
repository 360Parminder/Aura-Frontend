import React, { useState } from 'react'
import '../../Styles/Global.css'
import lock from '../../assets/images/lock.png'
import { useNavigate } from 'react-router-dom'

const Password = () => {
    const navigate=useNavigate()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmerror, setConfirmError] = useState(null)
    const [error, setError] = useState(null)
    const validatePassword = (password) => {
        // Check if the password is at least 8 characters long, includes a number, and a special character
        const isValid = password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password);
        return isValid;
    };
   
    
    
    function handleSubmit(e){
        e.preventDefault();
        // if (password.length === 0) {
        //     setError(false);
        // } else if (!validatePassword(password)) {
        //     setError(false);
        // }else if (password !== confirmPassword) {
        //     setConfirmError(false);
        // } else {
        //     setError(null);
        //     setConfirmError(null);
        //     // alert('Form submitted');
        // }
        navigate('/inviteFriends');
    }
    return (
        <>
            <div className=' text-center flex flex-col items-center w-full md:w-2/5 gap-3 mt-12'>
                <img className='w-10 h-10' src={lock} alt="" />
                <h2 className=' font-bold text-[30px]'>
                    Choose a password
                </h2>
                <p className=' text-[#F0F8FF]'>Must be at least 8 characters.</p>
                {/* <button className='px-[4px] py-[10px] rounded-md border w-full border-gray-500 font-bold flex gap-5 items-center justify-center'> <img className='w-6 h-6' src={google} alt="" /> Sign up with Google</button> */}
            </div>
            <form onSubmit={handleSubmit} className='w-full md:w-2/5 gap-2 flex flex-col' action="">
                <div className='formFieldDiv'>
                    <label className='formLabel' htmlFor="password" >Password*</label>
                    <input onChange={(text)=>setPassword(text.target.value)} className='formInput' type="password" name="password" id="password" placeholder='' required />
                    {error?<p className=' text-red-700'>Password must be at least 8 characters long, include a number, and a special character.*</p>:null}
                </div>
                <div className='formFieldDiv'>
                    <label className='formLabel' htmlFor="confirmPassword">Confirm Password*</label>
                    <input onClick={(text)=>setConfirmPassword(text.target.value)} className='formInput' type="text" name="confirmPassword" id="confirmPassword" required />
                    {confirmerror?<p className=' text-red-700'>Passwords do not match.*</p>:null}
                </div>
                <button type='submit' className='bg-[#7b2cbf] text-[#fff] px-[4px] py-[5px] rounded-md text-lg font-semibold mt-4' >Continue</button>
            </form>

        </>
    )
}

export default Password