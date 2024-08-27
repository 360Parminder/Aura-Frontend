import React, { useState } from 'react';
import '../../Styles/Global.css';
import invite from '../../assets/images/invite.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorCard, SuccessCard } from '../Cards/NotificationCard/NotificationCard';

const InviteFriend = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // State to store three emails
  const [inviteEmails, setInviteEmails] = useState(['', '', '']);
  const [apiStatus, setApiStatus] = useState(null);

  // Function to handle email input changes
  const handleEmailChange = (index, value) => {
    const updatedEmails = [...inviteEmails];
    updatedEmails[index] = value;
    setInviteEmails(updatedEmails);
  };

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/Avatar', { state: { ...location.state, inviteEmails } });
  }

  return (
    <>
     {apiStatus === 'success' && <SuccessCard />}
     {apiStatus === 'error' && <ErrorCard />}
      <div className='text-center flex flex-col items-center w-full md:w-2/5 gap-3 mt-12'>
        <img className='w-16 h-16' src={invite} alt="" />
        <h2 className='font-bold text-[30px]'>Invite your friends</h2>
        <p className='text-[#F0F8FF]'>Start Watchlist with your friends.</p>
      </div>
      <form onSubmit={handleSubmit} className='w-full md:w-2/5 gap-2 flex flex-col'>
        <div className='formFieldDiv gap-2'>
          <label className='formLabel' htmlFor="email">Email address</label>
          <input
            onChange={(e) => handleEmailChange(0, e.target.value)}
            value={inviteEmails[0]}
            className='formInput'
            type="email"
            name="email1"
            id="email1"
            placeholder='Enter an email address'
          />
          <input
            onChange={(e) => handleEmailChange(1, e.target.value)}
            value={inviteEmails[1]}
            className='formInput'
            type="email"
            name="email2"
            id="email2"
            placeholder='Enter an email address'
          />
          <input
            onChange={(e) => handleEmailChange(2, e.target.value)}
            value={inviteEmails[2]}
            className='formInput'
            type="email"
            name="email3"
            id="email3"
            placeholder='Enter an email address'
          />
        </div>
        <button className='bg-[#7b2cbf] text-[#fff] px-[4px] py-[5px] rounded-md text-lg font-semibold mt-4'>Continue</button>
      </form>
    </>
  );
};

export default InviteFriend;
