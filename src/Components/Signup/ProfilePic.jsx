import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import rocket from '../../assets/images/rocket.png';
import boy1 from '../../assets/images/Profile/boy1.jpeg';
import boy2 from '../../assets/images/Profile/boy2.jpeg';
import boy3 from '../../assets/images/Profile/boy3.jpeg';
import boy4 from '../../assets/images/Profile/boy4.jpeg';
import boy5 from '../../assets/images/Profile/boy5.webp';
import girl1 from '../../assets/images/Profile/girl1.jpeg';
import girl2 from '../../assets/images/Profile/girl2.jpeg';
import girl3 from '../../assets/images/Profile/girl3.jpeg';
import girl4 from '../../assets/images/Profile/girl4.jpeg';
import girl5 from '../../assets/images/Profile/girl5.jpeg';
import '../../Styles/Global.css';
import '../../Styles/Variables.css';


const ProfilePic = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [avatar, setAvatar] = useState();
    const { firstName, lastName, email, confirmPassword, inviteEmails } = location.state || {};

    const handleAvatarClick = (selectedAvatar) => {
        setAvatar(selectedAvatar);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (avatar) {
            // You can add additional logic here for form submission
            alert('Sign up completed!');
            console.log(firstName, lastName, email, confirmPassword, ...inviteEmails,avatar);
            
            // navigate('/finalPage', { state: { firstName, lastName, email, confirmPassword, inviteEmails, avatar } });
        } else {
            alert('Please select an avatar to complete the sign-up.');
        }
    };

    return (
        <>
            <div className='text-center flex flex-col items-center w-full md:w-2/5 gap-3 mt-12'>
                <img className='w-16 h-16' src={rocket} alt="" />
                <h2 className='font-bold text-[30px]'>Select Profile Icon</h2>
                <p className='text-[#F0F8FF]'>Choose your social Avatar.</p>
            </div>

            <div className='w-full gap-2 flex items-center justify-center flex-col mt-[3vh]'>
                <div className='grid grid-cols-3 md:grid-cols-5 md:grid-rows-2 gap-4 w-full px-4'>
                    <button onClick={() => handleAvatarClick('boy1')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={boy1} alt="" />
                    </button>
                    <button onClick={() => handleAvatarClick('boy2')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={boy2} alt="" />
                    </button>
                    <button onClick={() => handleAvatarClick('boy3')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={boy3} alt="" />
                    </button>
                    <button onClick={() => handleAvatarClick('boy4')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={boy4} alt="" />
                    </button>
                    <button onClick={() => handleAvatarClick('boy5')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={boy5} alt="" />
                    </button>
                    <button onClick={() => handleAvatarClick('girl1')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={girl1} alt="" />
                    </button>
                    <button onClick={() => handleAvatarClick('girl2')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={girl2} alt="" />
                    </button>
                    <button onClick={() => handleAvatarClick('girl3')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={girl3} alt="" />
                    </button>
                    <button onClick={() => handleAvatarClick('girl4')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={girl4} alt="" />
                    </button>
                    <button onClick={() => handleAvatarClick('girl5')} className='center'>
                        <img className='w-24 h-24 rounded-full' src={girl5} alt="" />
                    </button>
                </div>

                <button onClick={handleSubmit} className='bg-[#7b2cbf] text-[#fff] px-[4px] py-[5px] rounded-md text-lg font-semibold mt-[5vh]'>
                    Complete sign up
                </button>
            </div>
        </>
    );
};

export default ProfilePic;
