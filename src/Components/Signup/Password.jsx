import React, { useState } from 'react';
import '../../Styles/Global.css';
import lock from '../../assets/images/lock.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorCard, SuccessCard } from '../Cards/NotificationCard/NotificationCard';

const Password = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // States for password inputs and errors
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [confirmError, setConfirmError] = useState(null);
    const [apiStatus, setApiStatus] = useState(null);

    // Function to validate password
    const validatePassword = (password) => {
        // Check if the password is at least 8 characters long, includes a number, and a special character
        const isValid = password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password);
        return isValid;
    };

    // Handle password input change and validation
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (!validatePassword(newPassword)) {
            setError('Password must be at least 8 characters long, include a number, and a special character.');
        } else {
            setError(null);
        }
    };

    // Handle confirm password input change and validation
    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        if (newConfirmPassword !== password) {
            setConfirmError('Passwords do not match.');
        } else {
            setConfirmError(null);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password) {
            setError('Password is required.');
        } else if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long, include a number, and a special character.');
        } else if (password !== confirmPassword) {
            setConfirmError('Passwords do not match.');
        } else {
            setError(null);
            setConfirmError(null);
            navigate('inviteFriends', { state: { ...location.state, confirmPassword } });
        }
    };

    return (
        <>
         {apiStatus === 'success' && <SuccessCard />}
         {apiStatus === 'error' && <ErrorCard />}
            <div className='text-center flex flex-col items-center w-full md:w-2/5 gap-3 mt-12'>
                <img className='w-10 h-10' src={lock} alt="" />
                <h2 className='font-bold text-[30px]'>Choose a password</h2>
                <p className='text-[#F0F8FF]'>Must be at least 8 characters.</p>
            </div>
            <form onSubmit={handleSubmit} className='w-full md:w-2/5 gap-2 flex flex-col'>
                <div className='formFieldDiv'>
                    <label className='formLabel' htmlFor="password">Password*</label>
                    <input
                        onChange={handlePasswordChange}
                        value={password}
                        className='formInput'
                        type="password"
                        name="password"
                        id="password"
                        placeholder=''
                        required
                    />
                    {error && <p className='text-red-700'>{error}</p>}
                </div>
                <div className='formFieldDiv'>
                    <label className='formLabel' htmlFor="confirmPassword">Confirm Password*</label>
                    <input
                        onChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        className='formInput'
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                    />
                    {confirmError && <p className='text-red-700'>{confirmError}</p>}
                </div>
                <button type='submit' className='bg-[#7b2cbf] text-[#fff] px-[4px] py-[5px] rounded-md text-lg font-semibold mt-4'>Continue</button>
            </form>
        </>
    );
}

export default Password;
