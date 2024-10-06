import React from 'react';
import heroImg from '../../assets/images/img2.jpg';

export default function SeatsReseve() {
    return (
        <>
            <div className='bg-[#121212] w-80 h-[150vh] absolute top-36 left-32'>

                <div className='w-full h-[40%] bg-slate-100 bg-cover bg-right rounded-sm' style={{ backgroundImage: `url(${heroImg})` }}>

                </div>
                <div className="bg-[#121212] text-white p-4 w-80 rounded-lg shadow-lg">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border border-white p-3">
                            <span className="text-lg font-bold">N° : 1</span>
                            <span className="text-gray-400">300 dh</span>
                            <button className="text-gray-400 hover:text-red-500">&times;</button>
                        </div>
                        <div className="flex justify-between items-center border border-white p-3">
                            <span className="text-lg font-bold">N° : 2</span>
                            <span className="text-gray-400">300 dh</span>
                            <button className="text-gray-400 hover:text-red-500">&times;</button>
                        </div>
                        <div className="flex justify-between items-center border border-white p-3">
                            <span className="text-lg font-bold">N° : 3</span>
                            <span className="text-gray-400">300 dh</span>
                            <button className="text-gray-400 hover:text-red-500">&times;</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 text-lg">
                        <span>Total :</span>
                        <span>900 dh</span>
                    </div>

                    <div className="flex justify-between mt-16">
                        <button className="border font-bold border-[#FF1B1F] text-[#FF1B1F] hover:bg-red-700 hover:text-white px-4 py-2">Cancel</button>
                        <button className="bg-[#FF1B1F] font-bold hover:bg-green-700 text-white px-4 py-2 ">Confirm</button>
                    </div>
                </div>

            </div>
        </>
    )
}
