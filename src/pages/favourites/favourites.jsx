import React, { useContext } from 'react'
import SearchBar from '../Home/searchBar'
import MovieCard from '../Home/movieCard'
import {movieContext} from "../Home/app"
const Favourites = () => {
  const {favourites}=useContext(movieContext)
  return (
    <div>
      
      <header>
          <SearchBar/>
      </header>

      <main>
        <div className="movieGroup ">

          <MovieCard movies={favourites}/>
        </div>
      </main>

      <footer>
          <p>© 2025 Game Of Movies. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Favourites