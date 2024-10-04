import React from 'react';
import movieImg from '../../assets/images/img1.jpeg';
import '../../style/home.css'

export default function FilmSection() {
    const movies = [
        { id: 1, title: 'Avengers', subtitle: 'Infinity-war', description: 'lorem lorem | lorem' },
        { id: 2, title: 'Avengers', subtitle: 'Endgame', description: 'lorem lorem | lorem' },
        { id: 3, title: 'Iron Man', subtitle: 'The Beginning', description: 'lorem lorem | lorem' },
        { id: 4, title: 'Iron Man', subtitle: 'The Beginning', description: 'lorem lorem | lorem' },
        { id: 5, title: 'Iron Man', subtitle: 'The Beginning', description: 'lorem lorem | lorem' },
        { id: 6, title: 'Iron Man', subtitle: 'The Beginning', description: 'lorem lorem | lorem' },
        { id: 7, title: 'Iron Man', subtitle: 'The Beginning', description: 'lorem lorem | lorem' },
        { id: 8, title: 'Iron Man', subtitle: 'The Beginning', description: 'lorem lorem | lorem' },
        
    ];

    return (
        <>
            <div className="w-full bg-[#121212] h-[500px]">
                <p className="relative text-white text-xl font-semibold pl-9">
                    All movies
                    <span className="absolute bottom-0 left-9 w-16 border-b-2 border-red-700"></span>
                </p>


                <div className="flex flex-col bg-[#121212] m-auto p-auto">

                    <div
                        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                    >
                        <div
                            className="flex flex-nowrap   space-x-4 p-8"
                        >
                            {movies.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="relative w-64 h-96 shadow-md shadow-gray-600 hover:shadow-md hover:shadow-white bg-cover bg-center rounded-lg transition-all duration-300 ease-in-out transform  hover:w-72 hover:h-[400px]  "
                                    style={{ backgroundImage: `url(${movieImg})` }}
                                >
                                    {/* Titre et desc */}
                                    <div className="absolute w-full bottom-8 left-4 ">
                                        <h3 className="text-4xl font-bold flex justify-center w-full [text-shadow:_0_4px_8px_#000000]  text-[#FFFD83]">{movie.title}</h3>
                                        <p className="text-2xl font-bold flex justify-center w-full [text-shadow:_0_4px_8px_#000000]  text-[#FFFD83]">{movie.subtitle}</p>
                                        <p className="text-base text-white font-bold [text-shadow:_0_4px_8px_#000000]" >{movie.description}</p>
                                    </div>
                                    {/* Bouton apparaissant au survol */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                        <a href="#">
                                            <button className="text-[#FF1B1F] font-bold hover:shadow-md hover:shadow-white  bg-[#ffffff] w-full py-2 px-9 rounded hover:bg-[#FF1B1F] hover:text-white flex items-center justify-center">
                                                <span>To book</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="14"
                                                    width="12.25"
                                                    viewBox="0 0 448 512"
                                                    className="ml-2"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                                    />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




            </div>
        </>
    );
}
