import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-text'>
                Built by: Alex Hertel
            </div>
            <div>  </div>
            <div url='https://www.linkedin.com/in/ahertel2287/'>LinkedIn
                <Link to='https://www.linkedin.com/in/ahertel2287/' />
            </div>
        </footer>
    )
}
