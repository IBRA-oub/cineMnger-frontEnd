import React from 'react'
import seatBg from '../assets/images/seatBg.jpg';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <>
            <div className=' w-full h-[150vh] md:h-[100vh] roun bg-cover bg-center flex justify-center md:items-center  ' style={{ backgroundImage: `url(${seatBg})` }} >

                <div className='w-[80%] md:w-[70%] h-[50%] md:h-[80%] bg-[#ffffff26] md:flex '>
                    <div className='w-full md:w-1/2 h-[80%] md:h-full bg-[#ff0707] '>
                        <Link to="/">
                            <div className='absolute w-10 h-10  bg-cover bg-center' style={{ backgroundImage: `url(${logo})` }} >
                            </div>
                        </Link>

                        <div className='absolute top-10 md:top-48 w-[80%] md:w-[35%] h-52 '>
                            <p className='text-white text-center font-bold text-3xl md:text-5xl py-10 [text-shadow:_0_4px_8px_#000000] '>You have already account !?</p>
                            <Link to="/login" className='text-white [text-shadow:_0_4px_8px_#000000]  flex justify-center'>
                                <button className='border border-white py-2 px-16 rounded-md font-bold hover:bg-white hover:text-red-700'>
                                    Login
                                </button>
                            </Link>
                        </div>


                    </div>
                    <div className='w-full md:w-1/2 h-full bg-[#ffffff26]  flex items-center justify-center'>
                        <div class=" bg-opacity-50 p-8 rounded-lg w-full max-w-md">
                            <h2 class="text-4xl font-bold text-center text-white mb-6 [text-shadow:_0_4px_8px_#000000]">Register</h2>

                            <form action="#">
                                <div class="mb-4">
                                    <label for="full-name" class="block text-white mb-2">Full-Name</label>
                                    <input type="text" id="full-name" name="full-name" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                </div>

                                <div class="mb-4">
                                    <label for="email" class="block text-white mb-2">Email</label>
                                    <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                </div>

                                <div class="mb-6">
                                    <label for="password" class="block text-white mb-2">Password</label>
                                    <input type="password" id="password" name="password" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
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
