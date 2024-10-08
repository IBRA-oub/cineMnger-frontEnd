import React, { useEffect, useState } from 'react';
import heroImg from '../../assets/images/img2.jpg';
import axios from 'axios';
import { getSeance } from '../../../services/sessionApi/getSessionApi';

export default function SeatsReseve({ id }) {
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
    const handleConfirmReservation = async (e) => {
        e.preventDefault();

        
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (!token || !user) {
            alert('Vous devez être connecté pour réserver.');
            return;
        }

        try {
           
            const reservationData = {
                seanceId: seance._id,  
                places_reservees: selectedSeats.map(seat => ({ numero: seat })),
            };

            // Envoyer la requête POST à l'API backend
            const response = await axios.post('http://localhost:3000/api/reservation/createReservation', reservationData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                alert('Réservation confirmée avec succès !');
                
                localStorage.removeItem('selectedSeats');
                setSelectedSeats([]);  
            }
        } catch (error) {
            console.error('Erreur lors de la réservation:', error);
            alert('Une erreur est survenue lors de la réservation.');
        }
    };
    return (
        <>
            {loading && <div className='bg-[#121212] w-80 h-[150vh] absolute top-36 left-32'>

                <div className='w-full h-[40%] bg-slate-100 bg-cover bg-right rounded-sm' style={{ backgroundImage: `url(${seance.film.image})` }}>

                </div>
                <form onSubmit={handleConfirmReservation}>
                    <div className="bg-[#121212] text-white p-4 w-80 rounded-lg shadow-lg">
                        <div className="space-y-4">
                            {selectedSeats.map((seat, index) => (
                                <div key={index} className="flex justify-between items-center border border-white p-3">
                                    <span className="text-lg font-bold">N° : {seat}</span>
                                    <span className="text-gray-400">300 dh</span>
                                    <button
                                        className="text-gray-400 hover:text-red-500"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Supprimer le siège du localStorage
                                            const updatedSeats = selectedSeats.filter(s => s !== seat);
                                            setSelectedSeats(updatedSeats);
                                            localStorage.setItem('selectedSeats', JSON.stringify(updatedSeats));
                                        }}
                                    >&times;</button>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mt-4 text-lg">
                            <span>Total :</span>
                            <span>{selectedSeats.length * `${seance.tarif}`} dh</span>
                        </div>

                        <div className="flex justify-between mt-16">
                            <button type='submit' className="border font-bold border-[#FF1B1F] text-[#FF1B1F] hover:bg-red-700 hover:text-white px-4 py-2">Cancel</button>
                            <button className="bg-[#FF1B1F] font-bold hover:bg-green-700 text-white px-4 py-2 ">Confirm</button>
                        </div>
                    </div>
                </form>

            </div>}

        </>
    )
}
