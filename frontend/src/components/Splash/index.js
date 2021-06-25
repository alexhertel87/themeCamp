import React from 'react';
import { useSelector } from 'react-redux';
import { usePhotoContext } from '../../context/PhotoContext';
import Slideshow from '../Slideshow/index';
import ReservationsComponent from '../Reservations';
import CampsComponent from '../splashCamps';
import Footer from '../Footer';
import './Splash.css'

function Splash() {
    const { photoUrl } = usePhotoContext()

    return (
        <>
            <div className='splashComponent'>
                <ReservationsComponent />
                <div className='splashContainer'>
                    <Slideshow />
                    <CampsComponent />
            <div>
            </div>
                </div>
            </div>
        </>
    )
}

export default Splash;
