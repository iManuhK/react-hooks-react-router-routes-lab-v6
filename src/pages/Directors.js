import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import React from 'react'

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4001/directors")
      .then(res=>res.json())
        .then(data=>setDirectors(data))
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
          <article>
            {directors.map((director)=>{
              return (
                <>
                  <h2>{director.name}</h2>
                  {director.movies.map(movie => {
                      return <ul>{movie}</ul>
                    })}
                </>
              )
            })}
            
        </article>
      </main>
    </>
  );
};

export default Directors;
