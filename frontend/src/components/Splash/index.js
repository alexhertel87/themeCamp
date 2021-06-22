import React from 'react';
import { useSelector } from 'react-redux';
import { usePhotoContext } from '../../context/PhotoContext';
import Slideshow from '../Slideshow/index';
import './Splash.css'

function Splash() {
    const { photoUrl } = usePhotoContext()

    return (
        <div className='splashComponent'>
            {/* <form className='booking-form'>
                <label>
                    Thing
                    <input></input>
                </label>

            </form> */}
            <div className='slideshow'>
                <Slideshow />
            </div>
        </div>
    )
}

export default Splash;
