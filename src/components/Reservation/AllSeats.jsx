import React, { useEffect, useState } from 'react';
import '../../style/AllSeats.css'
import { getSeance } from '../../../services/sessionApi/getSessionApi';

export default function AllSeats({ id }) {
    // const [numSquares, setNumSquares] = useState(100)

    const [seance, setSeance] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {


        const fetchSeance = async () => {
            const data = await getSeance(id);
            // console.log(data);
            setSeance(data);
            setLoading(true)

            const storedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
            setSelectedSeats(storedSeats);
        };


        fetchSeance();

    }, [id]);

    const handleSeatClick = (place) => {
        if (!place.disponible) {
           
            return;
        }

        const updatedSeats = [...selectedSeats];
        const seatIndex = updatedSeats.indexOf(place.numero);

        if (seatIndex === -1) {
            
            updatedSeats.push(place.numero);
        } else {
            
            updatedSeats.splice(seatIndex, 1);
        }

        
        setSelectedSeats(updatedSeats);
        localStorage.setItem('selectedSeats', JSON.stringify(updatedSeats));
    };


    return (
        <>
            {loading && <div className='w-full h-[150vh] bg-[#121212] flex justify-end'>
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
                                {seance.places.map((place) => (
                                    <div
                                        key={place._id}
                                        onClick={() => handleSeatClick(place)}
                                        className={`w-6 h-6 mr-3 cursor-pointer ${!place.disponible ? 'bg-[#5656569f]' : selectedSeats.includes(place.numero) ? 'bg-[#FF1B1F]' : 'bg-slate-200'}`}
                                        title={`Seat ${place.numero}`}
                                    ></div>
                                ))}


                            </div>

                        </div>
                    </div>
                    <div className='w-[20%] h-full  flex justify-center '>
                        <div className='w-[70%] h-[50%]  flex flex-col text-white space-y-8 p-4  mt-20'>

                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">Date & Time:</span>
                                <span className="text-xl mt-2 text-center">{seance.date_heure}</span>
                            </div>


                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">Type:</span>
                                <span className="text-xl mt-2">{seance.salle.type}</span>
                            </div>
                        </div>



                    </div>
                </div>

            </div>}

        </>
    )
}
