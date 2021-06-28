import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-text'>
                Built by: Alexander H. Hertel
            </div>
            <div className='footer-element'>
                <a className='footerIcon' href='https://www.linkedin.com/in/ahertel2287/'><i className='fab fa-linkedin'></i> LinkedIn</a>
            </div>
            <div className='footer-element'>
                <a className='footerIcon' href='https://www.github.com/alexhertel87'>
                    <i className='fab fa-github'></i> GitHub</a>
            </div>

        </footer>
    )
}
