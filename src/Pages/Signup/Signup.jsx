import React from 'react'
// import { IonIcon } from '@ionic/react';
// import { heart, star } from 'ionicons/icons';
import './Signup.css';
const Signup = () => {
    return (
        <>
            <div className='flex flex-row'>
                <div className='w-2/5 h-screen bg-slate-400'>
                    <div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-3/5 flex-col'>

                    <div>
                        <img className='w-10 h-10' src='../../assets/images/flag.png' alt="" />
                        <img src="../../assets/images/flag.png" alt="" srcset="" />
                        <h2>
                            Your Details
                        </h2>
                        <p>Please provide your name and email</p>
                        <button>Signup with google</button>
                    </div>
                    <form className='w-2/5 gap-2 h-screen flex flex-col' action="">
                        <div className='flex flex-col'>
                            <label className='inputLabel' for="name">Name*</label>
                            <input className='inputField' type="text" id="name" name="name" placeholder='Enter your first name' required />
                        </div>
                        <div className='flex flex-col'>
                            <label className='inputLabel' for="lastname">Last Name*</label>
                            <input className='inputField' type="text" id="lastname" name="lastname" placeholder='Enter your last name' required />
                        </div>
                        <div className='flex flex-col'>
                            <label className='inputLabel' for="email">Email*</label>
                            <input className='inputField' type="email" id="email" name="email" placeholder='Enter you last name' required />

                        </div>
                        <button >Continue</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Signup