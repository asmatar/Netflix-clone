import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__socials">
                    <a href="/" className="footer__social"><FacebookIcon/></a>
                    <a href="/" className="footer__social"><InstagramIcon/></a>
                    <a href="/" className="footer__social"><TwitterIcon/></a>
                    <a href="/" className="footer__social"><YouTubeIcon/></a>
                </div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="/"> Audio and subtitles</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Audiodescription</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Help center</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Gift Cards</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Media centre</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Investor Relations</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Jobs</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Terms of Use</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Privacity</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Legal Notices</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Cookie Preferences</a>
                    </li>
                    <li className="footer__link">
                        <a href="/"> Corporate Information</a>
                    </li>
                </ul>
                <div className="footer__copy">
                    Arthur Deruelle - Netflix Clone - tous droits réservés
                </div>
            </div>
        </footer>
    );
}

export default Footer
