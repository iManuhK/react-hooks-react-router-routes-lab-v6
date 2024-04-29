import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import React from 'react'
import { useParams } from "react-router-dom";

function Movie() {
  const [movies, setMovies] = useState({})
  const params = useParams()

  useEffect(()=>{
    fetch(`http://localhost:4001/movies/${params.id}`)
    .then(res=>res.json())
    .then(data=>setMovies(data))
  },[params.id])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        
        {movies.map((movie)=>{
          return (<>
                    <h1>{movie.title}</h1>
                    <p>{movie.time}</p>
                    {movie.genre.map((genre)=>{
                      return <span>{genre}</span>
                    }
                    )}
                    </>)
        })
      }
      </main>
    </>
  );
};

export default Movie;
