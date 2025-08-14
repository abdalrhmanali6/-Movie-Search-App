import React, {useContext ,useState } from 'react'
import {movieContext} from "./app"
import { Link } from "react-router-dom"; 

const SearchBar = () => {

const { setMovieName, setyear } = useContext(movieContext);





  return (
    
  <header className="flex flex-col sm:flex-row items-center sm:justify-between px-6 py-4 bg-gray-900 text-white gap-4 sm:gap-0">
  
    <div className="flex-shrink-0">

      <img className="w-16 h-auto" src="/logo.png" alt="Logo" />

    </div>


    <div className="flex gap-3 w-full sm:w-auto">

      <input
        type="search"
        placeholder="Search For Movies"
        className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none"
        onChange={(event) => setMovieName(event.target.value)}
      />

      <input
      type="number"
      min="1960"
      max="2025"
      placeholder="Release year"
      className="px-4 py-2 w-28 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(event) => setyear(event.target.value)}
      />

    </div>

  
    <nav className="flex gap-6">

      <Link to="/">

        <button className="hover:text-blue-400 transition-colors">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">

            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />

          </svg>

        </button>
      </Link>

    <Link to="/Favourites">

      <button className="hover:text-yellow-400 transition-colors">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">

          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />

        </svg>

      </button>

    </Link>

  </nav>
  
</header>


  
  )
}

export default SearchBar