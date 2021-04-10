import React from 'react';
import './Banner.scss';
const Banner = () => {
    return (
        <header className='banner'>
            <div className="banner__content">
                <h1 className="banner__title">titre</h1>
                <p className="banner__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo iste, autem dolor praesentium 
                    obcaecati ipsam deserunt corporis temporibus id illum nobis eius saepe. Pariatur sed omnis maiores quaerat sint.
                </p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button--play">Lecture</button>
                    <button className="banner__button">plus d'info</button>
                </div>
            </div>          
        </header>
    )
}

export default Banner
