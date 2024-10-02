{movies.map((movie) => (
    <div
        key={movie.id}
        className="relative w-64 h-96 bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${movieImg})` }}
    >
        {/* Texte sur l'image */}
        <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold">{movie.title}</h3>
            <p className="text-sm">{movie.subtitle}</p>
            <p className="text-xs">{movie.description}</p>
        </div>
        {/* Bouton apparaissant au survol */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
            <a href="#">
                <button className="text-[#FF1B1F] font-bold bg-[#ffffff] w-[60%] py-2 rounded hover:bg-[#ff4f51] flex items-center justify-center">
                    <span>To book</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12.25"
                        viewBox="0 0 448 512"
                        className="ml-2"
                    >
                        <path
                            fill="#ff1b1f"
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        />
                    </svg>
                </button>
            </a>
        </div>
    </div>
))}