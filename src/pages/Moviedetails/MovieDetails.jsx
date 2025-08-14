import { useEffect, useState } from "react"
import {  useParams } from "react-router"
import { Link } from "react-router-dom"; 
import SearchBar from "../Home/searchBar";

function MovieDetails() {


    const params=useParams()

    const id=params.id
    
    const [movieDetails,setMovieDetails]=useState({})

    const [cast, setCast] = useState([]);
    
    //fetch data details by id
    useEffect(()=>{

        const options = {

        method: 'GET',

        headers: {

            accept: 'application/json',

            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzBkMmRiZmM1YWUyNzA5MjgxYzlmNjVjNjZkM2JhYyIsIm5iZiI6MTc1NDkyNDU1OS44MzYsInN1YiI6IjY4OWEwNjBmYjRhMTMyYmEwZDhkYWRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWCAISHnDCxURWh7RNUo1fEqxPq_9-d9rNy4RJYkFA'
        }

        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)

        .then(res => res.json())

        .then(data => setMovieDetails(data))

        .catch(err => console.error(err));
            }
        
    ,[])

    
    //fetch casts

    useEffect(() => {
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzBkMmRiZmM1YWUyNzA5MjgxYzlmNjVjNjZkM2JhYyIsIm5iZiI6MTc1NDkyNDU1OS44MzYsInN1YiI6IjY4OWEwNjBmYjRhMTMyYmEwZDhkYWRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWCAISHnDCxURWh7RNUo1fEqxPq_9-d9rNy4RJYkFA'
        }
        };

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
      .then((res) => res.json())
      .then((data) => setCast(data.cast || []))
      .catch((err) => console.error(err));
  }, [id]);
   
    
    
    
    
    
    

 return(
    <div >
        
          <SearchBar />

        
        <mian>

            <div className="container">
                        <div className="vcontainer">

                        <div className="imgcontainer">
                            <img className="poster1" src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}/>
                        </div>
                            <div className="detailscontainer">

                                <h1>
                                {movieDetails.original_title}
                                </h1>
                                
                                <p>
                                    Release date : <span>{movieDetails.release_date}</span>
                                </p>

                                <p>
                                Duration: <span>{movieDetails.runtime} min</span>
                                </p>

                                <p>
                                Language: <span>{movieDetails.original_language}</span> 
                                </p>

                                <p>
                                    Origin country: <span>{movieDetails.origin_country}</span>
                                </p>

                                <p>
                                Genres: {movieDetails.genres?.map(genere => (
                                            <span key={genere.id}>{genere.name} </span>
                                        ))}
                                </p>
                            </div>
                        </div>

                        <div className="discontainer">

                                <h2>“Description”</h2>

                                <span className="overview">{movieDetails.overview}</span>

                        </div>
                        
                    <div className="mt-10">

                    <h2 className="text-xl font-bold mb-4">Cast</h2>

                    <div className=" grid grid-cols-2 md:grid-cols-5 gap-4">

                        {cast.map((actor) => (

                        <div key={actor.id} className="actorcon text-center">

                            <img
                            src={
                                actor.profile_path
                                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                : "/no-image.png"
                            }
                            alt={actor.name}
                            className="rounded-lg w-full h-auto"
                            />

                            <p className="font-semibold">{actor.name}</p>

                            <p className="text-sm text-gray-500">{actor.character}</p>

                        </div>
                        ))}
                    </div>

                    </div>

            </div>

        </mian>

        <footer>

            <p>© 2025 Game Of Movies. All rights reserved.</p>
            
        </footer>
    </div>
 )
}

export default MovieDetails