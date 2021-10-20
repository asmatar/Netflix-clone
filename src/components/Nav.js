import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import './Nav.scss';
const Nav = () => {
  // let profile = useHistory()
    // 1 On veux detecter la transition au scroll

    // 1.1 creation state local pour mettre nav bar en black si on scroll, par défault la nav n'est pas noir
    const [navBlack, setNavBlack] = useState(false);
    // 1.2 on vérifi lors du scroll vertical. Si on est >100 la nav bar black est a true, sinon false
    const transitionNav = () => {
      window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    }
    // 1.3 au scroll on applique le changement
    useEffect(() => {
      document.addEventListener("scroll", transitionNav);
      return () => window.removeEventListener('scroll', transitionNav)
    }, [])
    // 2 initialisation du toogle menu, par défaut a false, pour faire apparaitre le menu
    const [toggleMenu, setToggleMenu] = useState(false);
    // 2.1 si toggleMenu est a false on affiche pas le menu, et si togglemenu est a true on affiche le menu
    const handleClick = () => {
        console.log(toggleMenu)
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
      }
      let history = useHistory()
      const logout = () => {
        console.log('logoiut fonction')
        localStorage.clear()
        history.push('/login')
      }
    return (
        // 1.4 si navBlack = true 2.2 ET QUE le toggl menu =true on applique la class "nav--Black" SINON on applique une class "nav--transparent"
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
           <button className="nav__burger" onClick={handleClick}>< MenuIcon /></button>
           <img src="./image/logo.png" alt="Netflix" onClick={()=>history.push('/')}/>
           <nav className='nav__links'>
               <NavLink to="/" 
               className='nav__link' > 
                    Home
               </NavLink>
               <NavLink to="/"  className='nav__link'> 
                Series
               </NavLink>
               <NavLink to="/" className='nav__link active' >
                    Film
               </NavLink>
               <NavLink to="/" className='nav__link active' > 
                    New&Popular
               </NavLink>
           </nav>
           <div className="nav__actions">
               <NavLink to="/" className='nav__action'>
               <SearchIcon/>
               </NavLink>
               <NavLink to="/" className='nav__action'>
               direct
               </NavLink>
               <NavLink to="/" className='nav__action'>
               <CardGiftcardIcon/>
               </NavLink>
               <NavLink to="/" className='nav__action'>
               <NotificationsIcon
               />
               </NavLink>
                 {/* <div className='log'>
                 {
                   localStorage.getItem('userName') ? 
                   <div className='login'>
                     {`welcome ${localStorage.getItem('userName')}`}
                    <img src="./image/flech.png" alt="" className='fleche' />
                  </div>
                   :
                   <img src="./image/avatar.jpg" alt=""/>
                 }     
                 <GoogleLogout
                  className='log-out'
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                  icon='false'
                  >
                     </GoogleLogout>
                </div> */}
                   {/* <NavLink to="/" className='nav__action'> */}
                   <img src="./image/avatar.jpg" alt="" className='nav__action'
                   onClick={()=> history.push('/profile')}
                   />
               
               

           </div>
        </div>
    )
}

export default Nav