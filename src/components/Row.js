import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Row.scss';
const Row = ({title, fetchUrl, isPoster}) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    // on veux recuperer tous les films dans une variable movies
    const [movies, setMovies] = useState([])
    const [toggleImgCss, setToggleImgCss ] = useState(false)
    console.log(toggleImgCss)
    const imgScale = () => {
        console.log('okok')
        setToggleImgCss(!toggleImgCss)
    }
    useEffect(() => {
        // on appel l'API
        async function fetchData () {;
            // appel de l'api pour récuperer les movies
            const request = await axios.get(fetchUrl);
            // on récupere les données de tous les films et on les mets dans movies grace a setMOvies
            setMovies(request.data.results);
        }
        // on appel fetchData mais seuleument au cargement de la page !
        fetchData();
    },[fetchUrl]);
    // console.log(movies);
    return (
        <div className='row'>
            <h2 className="row__title"> {title}</h2>
                <div className="row__images">
                    {/* objectif: que les image de la premiere row soit en mode portrait, et les autres en mode paysages */}
                    {/* On map sur les résultats de l'API qui sont stoqués dans la variable movies */}
                    {movies.map((movie)=> (
                    <div key={movie.id}>
                        {/* si on click sur une image on arrive également a l'url de la video */}
                        <Link to={`/video/${movie?.id}`}>
                        {/* On creer une variable qu'on initialise a true, si elle est a true alors on vas chercher une url */}
                        {isPoster ? (
                        <img src={`${baseUrl}${movie?.poster_path}`} alt={movie.title} className='row__image'/>
                        // sinon
                        ) : (
                            // On va chercher une autre URL
                            <img src={`${baseUrl}${movie?.backdrop_path}`} 
                            alt={movie.title} 
                            className={`${toggleImgCss ? 'row__MouseImage' : 'row__image'}`}
                            // 'row__image' 
                            onMouseOver={imgScale}
                            onMouseOut={imgScale}
                            />
                        )}
                        </Link>
                    </div>
                    ))}
                </div>
        </div>
    )
}

export default Row
