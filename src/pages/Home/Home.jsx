import { useContext, useEffect, useRef, useState } from "react";
import MovieCard from './movieCard';
import SearchBar from "./searchBar";
import {movieContext} from "./app"



const Home=()=>{

    
    const { movieName, year } = useContext(movieContext);

    const[popular,changepop]=useState([])

    const[nowPlaying,changenow]=useState([])

    const[upcoming,changeup]=useState([])

    const  [toprated,changerated]=useState([])

    const [movies,setmovies]=useState([])
    


    //Fetch Search data
    useEffect(()=>{

        if(movieName.trim()==""){

            return;

        }

        const options = {

        method: 'GET',

        headers: {

            accept: 'application/json',

            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzBkMmRiZmM1YWUyNzA5MjgxYzlmNjVjNjZkM2JhYyIsIm5iZiI6MTc1NDkyNDU1OS44MzYsInN1YiI6IjY4OWEwNjBmYjRhMTMyYmEwZDhkYWRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWCAISHnDCxURWh7RNUo1fEqxPq_9-d9rNy4RJYkFA'
        }
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&primary_release_year=${year}`, options)

        .then(response => response.json())

        .then(data => data.results||[])

        .then(movies=>setmovies(movies))

        .catch(err => console.error(err));

        },[movieName,year])
   
    
    
    
    //fetch top rated movies
    useEffect(()=>{

        const options = {

        method: 'GET',

        headers: {

            accept: 'application/json',

        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzBkMmRiZmM1YWUyNzA5MjgxYzlmNjVjNjZkM2JhYyIsIm5iZiI6MTc1NDkyNDU1OS44MzYsInN1YiI6IjY4OWEwNjBmYjRhMTMyYmEwZDhkYWRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWCAISHnDCxURWh7RNUo1fEqxPq_9-d9rNy4RJYkFA'
    }
    };


    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)

    .then(res => res.json())

    .then(data => data.results||[])

    .then(movies=>changerated(movies))

    .catch(err => console.error(err));}

        ,[])
   



    //fetch popular movies
        useEffect(()=>{

        const options = {

        method: 'GET',

        headers: {

            accept: 'application/json',

        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzBkMmRiZmM1YWUyNzA5MjgxYzlmNjVjNjZkM2JhYyIsIm5iZiI6MTc1NDkyNDU1OS44MzYsInN1YiI6IjY4OWEwNjBmYjRhMTMyYmEwZDhkYWRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWCAISHnDCxURWh7RNUo1fEqxPq_9-d9rNy4RJYkFA'
    }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)

    .then(res => res.json())

    .then(data => data.results||[])

    .then(movies=>changepop(movies))

    .catch(err => console.error(err));}

        ,[])




    //fetch now_playing movies

        useEffect(()=>{

        const options = {

        method: 'GET',

        headers: {

            accept: 'application/json',

        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzBkMmRiZmM1YWUyNzA5MjgxYzlmNjVjNjZkM2JhYyIsIm5iZiI6MTc1NDkyNDU1OS44MzYsInN1YiI6IjY4OWEwNjBmYjRhMTMyYmEwZDhkYWRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWCAISHnDCxURWh7RNUo1fEqxPq_9-d9rNy4RJYkFA'
    }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

    .then(res => res.json())

    .then(data => data.results||[])

    .then(movies=>changenow(movies))

    .catch(err => console.error(err));}
        ,[])



    //fetch upcoming movies
        useEffect(()=>{

        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzBkMmRiZmM1YWUyNzA5MjgxYzlmNjVjNjZkM2JhYyIsIm5iZiI6MTc1NDkyNDU1OS44MzYsInN1YiI6IjY4OWEwNjBmYjRhMTMyYmEwZDhkYWRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWCAISHnDCxURWh7RNUo1fEqxPq_9-d9rNy4RJYkFA'
    }
    };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => data.results||[])
    .then(movies=>changeup(movies))
    .catch(err => console.error(err));}
        ,[])
    


    
    
    
    return(
        //put fetched data in carts
        <div  >
           
                <SearchBar/>

            <main className="space-y-8 px-4">

                    {movies.length === 0 || movieName.length === 0 ? (

                        <div className="container mx-auto space-y-10">

                        <div className="movieGroup">

                            <p className="text-xl font-semibold mb-3">Popular:</p>

                            <MovieCard movies={popular} horizontalOnMobile />

                        </div>

                        <div className="movieGroup">

                            <p className="text-xl font-semibold mb-3">Top Rated:</p>

                            <MovieCard movies={toprated} horizontalOnMobile />

                        </div>
                        <div className="movieGroup">

                            <p className="text-xl font-semibold mb-3">Now Playing:</p>

                            <MovieCard movies={nowPlaying} horizontalOnMobile />

                        </div>
                        <div className="movieGroup">

                            <p className="text-xl font-semibold mb-3">Upcoming:</p>

                            <MovieCard movies={upcoming} horizontalOnMobile />
                        </div>

                        </div>
                    ) : (
                        <div className="movieGroup">

                        <p className="text-xl font-semibold mb-3">Search Results:</p>

                        <MovieCard movies={movies} horizontalOnMobile />

                        </div>
                    )}

                    </main>
           
            
            <footer className="">
                

                <p>© 2025 Game Of Movies. All rights reserved.</p>
                
            </footer>

            
        </div>
        
        
    )
}

export default Home;


