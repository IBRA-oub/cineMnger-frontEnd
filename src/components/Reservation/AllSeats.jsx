import React, { useState } from 'react';
import '../../style/AllSeats.css'

export default function AllSeats() {
    // const [numSquares, setNumSquares] = useState(100)

    return (
        <>
            <div className='w-full h-[150vh] bg-[#121212] flex justify-end'>
                <div className='w-[70%] h-full  flex'>

                    <div className='w-[80%] h-full '>
                        <div className='w-full h-20 flex justify-evenly items-center '>
                            <div className='flex text-white'>
                                <div className='w-6 h-6 bg-slate-200 mr-3'></div>
                                <p>Empty</p>
                            </div>
                            <div className='flex text-white'>
                                <div className='w-6 h-6 bg-[#5656569f] mr-3'></div>
                                <p>Full</p>
                            </div>
                            <div className='flex text-white'>
                                <div className='w-6 h-6 bg-[#FF1B1F] mr-3'></div>
                                <p>Your reservation</p>
                            </div>
                        </div>
                        <div className='w-full h-56  flex justify-center items-center'>
                            <div className="w-[70%] h-32 bg-[#565656] relative trapezoid"></div>
                        </div>
                        <div className='w-full h-screen  flex justify-center items-center'>
                            <div className='w-[60%] min-h-[80%]  grid grid-cols-12'>
                                {/* {Array(numSquares).fill().map((_, index) => (
                                    <div key={index} className="w-6 h-6 bg-[#FF1B1F] mr-3"></div>
                                ))} */}

                                <div  className="w-6 h-6 bg-[#FF1B1F] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#FF1B1F] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#FF1B1F] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-slate-200 mr-3"></div>
                                <div  className="w-6 h-6 bg-[#5656569f] mr-3"></div>


                            </div>

                        </div>
                    </div>
                    <div className='w-[20%] h-full  flex justify-center '>
                        <div className='w-[70%] h-[50%]  flex flex-col text-white space-y-8 p-4  mt-20'>

                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">Date:</span>
                                <div className="flex flex-col items-center justify-center border-2 border-white w-16 h-20 mt-2">
                                    <span className="text-3xl font-bold">14</span>
                                    <span className="text-sm">DEC</span>
                                </div>
                            </div>


                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">Time:</span>
                                <span className="text-xl mt-2">21:00</span>
                            </div>


                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">Type:</span>
                                <span className="text-xl mt-2">IMAX 3D</span>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}
