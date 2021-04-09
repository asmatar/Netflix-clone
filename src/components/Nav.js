import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import React from 'react';
import './Nav.scss';
const Nav = () => {
    <SearchIcon/>
    return (
        <div className='nav show nav--black'>
           <button className="nav__burger">< MenuIcon /></button>
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
               <SearchIcon/>
               </a>
               <a href="/" className='nav_action'>
               direct
               </a>
               <a href="/" className='nav_action'>
               <CardGiftcardIcon/>
               </a>
               <a href="/" className='nav_action'>
               <NotificationsIcon/>
               </a>
               <a href="/" className='nav_action'>
                   <img src="./image/avatar.jpg" alt=""/>
               </a>
           </div>
        </div>
    )
}

export default Nav