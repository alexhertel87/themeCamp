import React from 'react';
import { useSelector } from 'react-redux';
import { usePhotoContext } from '../../context/PhotoContext';
import Slideshow from '../Slideshow/index';
import './Splash.css'

function Splash() {
    const { photoUrl } = usePhotoContext()

    return (
        <div className='splashComponent'>
            <div>
                Spash div
            </div>
            <div className='slideshow'>slideshow div
                <Slideshow />
            </div>
        </div>
    )
}

export default Splash;
