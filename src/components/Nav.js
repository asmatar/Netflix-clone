import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <div className='nav show nav--black'>
           <button className="nav__burger">---</button>
           <img src="./image/logo.png" alt="Netflix"/>
           <nav className='nav__links'>
               <a href="/" className='nav__link'> 
                    acceuil
               </a>
               <a href="/" className='nav__link'> 
                series
               </a>
               <a href="/" className='nav__link'> 
                    film
               </a>
           </nav>
           <div className="nav__actions">
               <a href="/" className='nav_action'>
                   search
               </a>
               <a href="/" className='nav_action'>
                   direct
               </a>
               <a href="/" className='nav_action'>
                   gift
               </a>
               <a href="/" className='nav_action'>
                   notif
               </a>
               <a href="/" className='nav_action'>
                   <img src="./image/avatar.jpg" alt=""/>
               </a>
           </div>
        </div>
    )
}

export default Nav