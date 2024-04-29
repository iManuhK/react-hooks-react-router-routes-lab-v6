import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors]= useState([])

  useEffect(()=>{
    fetch("http://localhost:4001/actors")
      .then(res=>res.json())
        .then(data=>setActors(data))
  },[])

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {/* Actor info here! */}
        {actors.map((actor)=>{
          return (
            <>
              <article>
                <h2>{actor.name}</h2>
                {actor.movies.map(movie => {
                      return (<ul>{movie}</ul>)
                    })}
              </article>
            </>
          )
        })}
      </main>
    </>
  );
};

export default Actors;
