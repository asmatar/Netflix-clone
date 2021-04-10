import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Row.scss';

const Row = ({title, fetchUrl, isPoster}) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    // on veux recuperer tous les fillms
    const [movies, setMovies] = useState([])

    useEffect(() => {
        // on appel l'API
        async function fetchData () {;
            const request = await axios.get(fetchUrl);
            // On rempli movie d'un film aléatoire ! parmis les résultats de films on veux trouver un films aléatoire, on utilise math floor et math random sur l'ensemble des résultats de la liste
            setMovies(request.data.results);
        }
        // on appel fetchData
        fetchData();
    },[fetchUrl]);
    
    console.log(movies);

    return (
        <div className='row'>
            <h2 className="row__title"> {title}</h2>
                <div className="row__images">
                    {movies.map((movie)=> (
                    <div key={movie.id}>
                        {isPoster ? (
                        <img src={`${baseUrl}${movie?.poster_path}`} alt={movie.title} className='row__image'/>
                        ) : (
                            <img src={`${baseUrl}${movie?.backdrop_path}`} alt={movie.title} className='row__image'/>
                        )}
                    </div>
                    ))}
                </div>
        </div>
    )
}

export default Row
