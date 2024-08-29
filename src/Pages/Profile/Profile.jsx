import React from 'react'
import profilepic from '../../assets/images/Profile/girl4.jpeg'
const Profile = () => {
  return (
    <div className=' bg-black w-screen h-screen flex flex-col'>
      <div className='flex flex-row items-center justify-between mx-10 px-3 py-2 rounded-md border-2 '>
        <div>
          <img className=' rounded-full w-[7rem] h-[7rem]' src={profilepic} alt="" />
        </div>
        <div >
          <p>User Name</p>
          <p className='text-2xl font-semibold'>Parminder Singh</p>
        </div>
        <div>
          <div className='flex flex-row'>
            <p>User Email:</p>
            <p>Parminder@gmail.com</p>
          </div>
          <div className='flex flex-row'>
            <p>User Contact:</p>
            <p>+91 8779112732</p>
          </div>
          
        </div>
        <div>
        <div className='flex flex-row'>
              <p>Role:</p>
              <p>User</p>
            </div>
            <div className='flex flex-row'>
              <p>Role:</p>
              <p>User</p>
            </div>

          </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Profile