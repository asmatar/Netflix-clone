import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from 'react';
import './Nav.scss';
const Nav = () => {
    // On veux detecter la transition au scroll

    // 1. creation state local pour mettre nav bar en black si on scroll, par défault la nav n'est pas noir
    const [navBlack, setNavBlack] = useState(false)
    // const [toggleMenu, setToggleMenu] = useState(false)
    // 2. on vérifi lors du scroll vertical. Si on est >100 la nav bar black est a true, sinon false
    const transitionNav = () => {
      window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    }
    // 3. au scroll on applique le changement
    useState(() => {
      document.addEventListener("scroll", transitionNav)
    })
    
    return (
        // si navBlack = true on applique la class "nav--Black"
        <div className={`nav ${navBlack && "nav--black"}`}>
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