import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from 'react';
import './Nav.scss';
const Nav = () => {
    // 1 On veux detecter la transition au scroll

    // 1.1 creation state local pour mettre nav bar en black si on scroll, par défault la nav n'est pas noir
    const [navBlack, setNavBlack] = useState(false);
    // 2 initialisation du toogle menu, par défaut a false, pour faire apparaitre le menu
    const [toggleMenu, setToggleMenu] = useState(false);
    // 2.1 si toggleMenu est a false on affiche pas le menu, et si togglemenu est a true on affiche le menu
    const handleClick = () => {
        console.log(toggleMenu)
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
      }
    // 1.2 on vérifi lors du scroll vertical. Si on est >100 la nav bar black est a true, sinon false
    const transitionNav = () => {
      window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    }
    // 1.3 au scroll on applique le changement
    useState(() => {
      document.addEventListener("scroll", transitionNav)
    })
    
    return (
        // 1.4 si navBlack = true 2.2 ET QUE le toggl menu =true on applique la class "nav--Black" SINON on applique une class "nav--transparent"
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
           <button className="nav__burger" onClick={handleClick}>< MenuIcon /></button>
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
               <a href="/" className='nav__action'>
               <SearchIcon/>
               </a>
               <a href="/" className='nav__action'>
               direct
               </a>
               <a href="/" className='nav__action'>
               <CardGiftcardIcon/>
               </a>
               <a href="/" className='nav__action'>
               <NotificationsIcon/>
               </a>
               <a href="/" className='nav__action'>
                   <img src="./image/avatar.jpg" alt=""/>
               </a>
           </div>
        </div>
    )
}

export default Nav