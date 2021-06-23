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
                Hello
            </div>
            <div className='slideshow'>Hello
                <Slideshow />
            </div>
        </div>
    )
}

export default Splash;
