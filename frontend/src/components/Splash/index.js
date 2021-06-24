import React from 'react';
import { useSelector } from 'react-redux';
import { usePhotoContext } from '../../context/PhotoContext';
import Slideshow from '../Slideshow/index';
import './Splash.css'

function Splash() {
    const { photoUrl } = usePhotoContext()

    return (
        <div className='splashComponent'>Splash Component
            <div className='splashContainer'>Splash Container
            <div className='slideshow'>Slideshow div
                <Slideshow />
            </div>

            </div>
        </div>
    )
}

export default Splash;
