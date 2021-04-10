import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import requests from "../config/request";
import './Banner.scss';

const Banner = () => {



    // on veux trouver un film aléatoire parmis l'ensemble des films
    const [movie, setMovie] = useState ([])

    useEffect(() => {
        async function fetchData () {;
            const request = await axios.get(requests.fetchTrending);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData();
    },[]);

    function truncateText(string, n) {
       return string?.length > n ? string.substr(0, n -1) + '...' : "no description" ;
    }
    const bannerStyle ={
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    }
    
    console.log(movie)
    return (
        <header className='banner' style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title">
                    {movie?.title || movie?.original_title || movie?.name}
                </h1>
                <p className="banner__description">
                {truncateText(movie?.overview, 100)}
                </p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button--play"><PlayArrowIcon /> Lecture</button>
                    <button className="banner__button"><HelpOutlineIcon /> Plus d'info</button>
                </div>
            </div>          
        </header>
    )
}

export default Banner
