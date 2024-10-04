import React from 'react';
import bgImg from '../assets/images/bgImg.png';

export default function ForgetPassword() {
    return (
        <>
            <div className=' w-full h-[150vh] md:h-[100vh] roun bg-cover bg-center flex justify-center  md:items-center  ' style={{ backgroundImage: `url(${bgImg})` }} >

                <div className='absolute top-52 w-96 h-96 bg-black '>
                    <div className='w-full rounded-md  h-full bg-[#ffffff26]  flex items-center justify-center'>
                        <div class=" bg-opacity-50 p-8 rounded-lg w-full max-w-md">
                            <h2 class="text-4xl  font-bold text-center text-white mb-16 [text-shadow:_0_4px_8px_#000000]"><span>Did you forget password!? </span><br/><span className='text-sm font-light'>don't worry just enter your email</span></h2>

                            <form action="#">


                                <div class="mb-4">
                                    <label for="email" class="block text-white mb-2">Email</label>
                                    <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                </div>

                                <button type="submit" class="w-full py-2 bg-[#ff0707]  text-white font-bold rounded-md hover:bg-white hover:text-[#ff0707]  transition">Submit</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
