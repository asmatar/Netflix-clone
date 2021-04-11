import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import requests from "../config/request";
import './Banner.scss';
import QuickView from "./QuickView";
const Banner = () => {

    // on veux trouver un film aléatoire parmis l'ensemble des films
    const [movie, setMovie] = useState ([])
    // on veux utiliser axios et charger chaque fois qu'on arrive sur la page
    useEffect(() => {
        // on appel l'API
        async function fetchData () {;
            const request = await axios.get(requests.fetchTrending);
            // On rempli movie d'un film aléatoire ! parmis les résultats de films on veux trouver un films aléatoire, on utilise math floor et math random sur l'ensemble des résultats de la liste
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        // on appel fetchData
        fetchData();
    },[]);
    // fonction pour diminuer la longueur de la description  grace a string.substr. Celle ci prends en parametre la string ( description, et le nombres de caractere que l'on veux)
    function truncateText(string, n) {
        // Nous avons 0 en parametre, puisque movie est un arrret qui n'a qu'un film, donc index 0
       return string?.length > n ? string.substr(0, n -1) + '...' : "no description" ;
    }
    // style du banner
    const bannerStyle ={
        // l'URL se trouve dans les données de l'api
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    }
    // POp up
    const [popup, setPopup] = useState(false)
    //fonction pour ouvrir la pop up
    function handlePopup () {
        // si popup est true on ferme la pop up, sinon on l'ouvre
        popup ? setPopup(false) : setPopup(true)
    }
    console.log(popup)
    return (
        // on applique le style du banner
        <header className='banner' style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title">
                    {movie?.title || movie?.original_title || movie?.name}
                </h1>
                <p className="banner__description">
                    {/* On réduit la description a 100 caracteres */}
                {truncateText(movie?.overview, 100)}
                </p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button--play"><PlayArrowIcon /> Lecture</button>
                    {/*  la popup s'ouvre avec ce bouton */}
                    <button className="banner__button" onClick={handlePopup}><HelpOutlineIcon /> Plus d'info</button>
                </div>
            </div>
            {/*  la pop up = quickview , on lui donne un style avec banner style, on lui passe movie pour afficher les donnée de la movie, 
            on passe popup qui va appelé la fonction pour ouvrir ou fermer la popup, on passe popup status pour savoir si la popup est ouverte ou fermé */}
            <QuickView bannerStyle={bannerStyle} movie={movie} popup={handlePopup} popupStatuts={popup}/>
        </header>
    )
}

export default Banner
