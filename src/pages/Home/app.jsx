import { useState,createContext } from "react";
import { createBrowserRouter, RouterProvider, } from "react-router";
import Home from "./Home";
import MovieDetails from "../Moviedetails/MovieDetails"
import Favourites from "../favourites/favourites";


export const movieContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:title/:id",
    element: <MovieDetails />,
  },
  {
    path:"/Favourites",
    element:<Favourites/>
  }
]);

const App=()=> {

  const [movieName, setMovieName] = useState("");
  const [year, setYear] = useState("");
  const [favourites,setfavourites]=useState([])
  return (
    <movieContext.Provider value={{ movieName, setMovieName, year, setYear,favourites,setfavourites }}>
      <RouterProvider router={router} />
    </movieContext.Provider>
  );
}

export default App;