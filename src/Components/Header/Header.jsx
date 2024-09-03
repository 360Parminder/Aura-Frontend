import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import aura from '../../assets/images/Aura.png'
import profilegirl from '../../assets/images/profilegirl.jpeg'
import profileboy from '../../assets/images/profileboy.jpeg'
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const navigate =useNavigate();
  const [activeButton, setActiveButton] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const {isAuthenticated} = useContext(AuthContext)
  // console.log(isAuthenticated);
  const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log(user, isAuthenticated, isLoading);
  
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsMenuOpen(false); // Close the menu when a button is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          },
        }}
        className="w-screen flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-3 bg-transparent"
      >
        <div className="flex justify-between w-full md:w-auto items-center">
          <img src={aura} alt="Logo" className=" w-[10vw] h-auto" />
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Bar: Always shown on md and larger screens */}
        <motion.div
        
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          },
        }}
        className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row justify-between w-full md:w-2/5 rounded-md border-2 border-[#1A1A1A] px-3 py-2 md:px-5 md:py-3 mt-2 md:mt-0`}>
          <button
            className={`rounded-md px-2 md:px-4 py-1 md:py-2 ${
              activeButton === 'Home' ? 'bg-[#1A1A1A] text-white' : ''
            }`}
            onClick={() => [handleButtonClick('Home'),navigate('/')]}
          >
            Home
          </button>
          <button
            className={`rounded-md px-2 md:px-4 py-1 md:py-2 ${
              activeButton === 'Movies & Shows' ? 'bg-[#1A1A1A] text-white' : ''
            }`}
            onClick={() => [handleButtonClick('Movies & Shows'),navigate('moviesShowsDashboard')]}
          >
            Movies & Shows
          </button>
          <button
            className={`rounded-md px-2 md:px-4 py-1 md:py-2 ${
              activeButton === 'Support' ? 'bg-[#1A1A1A] text-white' : ''
            }`}
            onClick={() => handleButtonClick('Support')}
          >
            Support
          </button>
          <button
            className={`rounded-md px-2 md:px-4 py-1 md:py-2 ${
              activeButton === 'Subscriptions' ? 'bg-[#1A1A1A] text-white' : ''
            }`}
            onClick={() => handleButtonClick('Subscriptions')}
          >
            Subscriptions
          </button>
        </motion.div>

        {/* User Icon (only shown on md and larger screens) */}
        {
        !isAuthenticated?
        <div className='flex flex-row gap-2'>
          <button onClick={()=>navigate('/login')} className='px-4 py-2 border-2 rounded-md'>Login</button>
          <button onClick={()=>navigate('/signup')} className='px-4 py-2 border-2 rounded-md'>Signup</button>
        </div>:
        <button onClick={()=>navigate('Profile')} className="hidden md:flex w-[10vw] justify-end">
        <img src={user?user.picture:profilegirl} alt="User Icon" className="w-16 h-16 rounded-full" />
      </button>
      }
        
        
      </motion.div>
    </>
  );
};

export default Header;
