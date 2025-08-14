import { useEffect,useContext, useState } from 'react';
import { Link } from 'react-router';
import {movieContext} from "./app"


   
    const MovieCard = ({movies}) => {


    
     const {favourites,setfavourites}=useContext(movieContext)

    //Check if movie in favourite or not
    const isfavourite=(movie)=>{
        return  favourites.some((fav)=>fav.id==movie.id)
    }

    //Add or remove movie from favourite
    const changeFavList=(movie)=>{
        setfavourites((fav)=>{
            const isHere=fav.some((fav)=>fav.id==movie.id)

            return isHere?fav.filter((fav)=>fav.id!=movie.id):
            [...fav,movie]
        })
    }

    
    //Load favourite movies from localStorage
    useEffect(() => {
    const saved = localStorage.getItem("favourites");
    saved&&setfavourites(JSON.parse(saved));
    }, []);


    //Load favourite movies to localStorage
    useEffect(() => {
        favourites.length > 0&&localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    

    
    return (
        //Design and mapping movies in card
         <div className="container mx-auto px-4">

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                {movies.map((movie) => (

                movie.poster_path !== null && (

                    <Link key={movie.id} to={`/${movie.original_title}/${movie.id}`}>

                    <div className="card text-bg-dark aspect-[2/3] relative rounded-lg overflow-hidden ">

                        <button

                        className="absolute right-2 top-2 z-10"

                        onClick={(event) => {

                            event.preventDefault();

                            event.stopPropagation();

                            changeFavList(movie);
                        }}
                        >
                        {isfavourite(movie) ? (

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-6">

                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd"
                            />
                            </svg>

                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-5">

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />

                            </svg>
                        )}

                        </button>

                        <img
                        className="poster card-img-top w-full h-full object-cover"
                        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                        alt={movie.original_title || movie.name}
                        />

                        <div className="card-footer text-center p-2 bg-opacity-60">

                        <p className="text-sm sm:text-base text-yellow-500 font-medium line-clamp-2">

                        {movie.original_title || movie.name}

                        </p>

                        </div>

                    </div>
                    
                    </Link>
                )
                ))}
            </div>
        </div>

    )}


export default MovieCard;