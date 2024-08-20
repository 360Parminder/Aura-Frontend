import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-screen  flex flex-row justify-between items-center px-10 bg-slate-950'>
        <img src="" alt="" />
        <div className='flex flex-row justify-between w-2/6 rounded-md border-2 border-[#1A1A1A] px-5 py-3 my-4'>
        <button className=' rounded-md bg-[#1A1A1A] px-4 py-2 '>Home</button>
        <button>Movies & Shows</button>
        <button>Support</button>
        <button>Subscriptions</button>
        </div>
        <div>
            <img src="" alt="" />
        </div>
    </div>
    </>
  )
}

export default Header