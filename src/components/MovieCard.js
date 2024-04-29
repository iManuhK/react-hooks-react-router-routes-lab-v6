import {Link} from 'react-router-dom';
import React from 'react'

function MovieCard({title,movId}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <Link to={`/movies/${movId}`}>View profile</Link>
    </article>
  );
};

export default MovieCard;