import React from 'react';
import heroImg from '../../assets/images/img2.jpg';

export default function HeroSection() {
    return (
        <>
            <div className="h-96 bg-[#121212] md:h-[400px] w-full bg-cover bg-center  relative overflow-hidden" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className='w-full h-full blur-lg bg-[#000000c0]'></div>

                <div className='h-72 md:h-96 w-72 md:w-full  absolute -bottom-24  md:left-96  left-24'>
                    <div className='w-[60%] h-32 md:h-52 md:pb-9 flex justify-end '>
                        <h1 className='text-white text-center font-bold text-4xl md:text-8xl [text-shadow:_0_4px_8px_#000000] leading-17'>Avangers  Infinity war</h1>
                    </div>

                </div>
                <div className='text-white  flex absolute bottom-10 right-10'>
                    <div className='w-1 h-20 bg-white mr-2' >

                    </div>
                    <div>
                        <p><span className='font-bold'>Genre : </span>Action</p>
                        <p><span className='font-bold'>Duration</span> 120 min </p>
                        <p> + 18 </p>

                    </div>

                </div>


            </div>
        </>
    )
}
