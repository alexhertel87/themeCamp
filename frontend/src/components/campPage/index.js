import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CampPage.css'
import { useParams } from 'react-router';
import { getOneCamp } from '../../store/camps';
import { newReservation } from '../../store/reservations';
import { usePhotoContext } from '../../context/PhotoContext';
import { getGifts } from '../../store/giftItems';

import { Redirect } from 'react-router'
import { useHistory } from 'react-router'

function CampPageComponent({ isLoaded }) {
    const { photoUrl } = usePhotoContext()

    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneCamp(id))
    }, [dispatch, id])

    const currentCamp = useSelector(state => state.camps.currentCamp);
    const currentUser = useSelector(state => state.session.user)
    // console.log("currentCamp -->", currentCamp);
    // console.log("currentUser -->", currentUser);

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const bookedTitle = document.getElementById('bookedTitle')

    const HandleSubmit = async (e) => {
        e.preventDefault();



        const payload = {
            userId: currentUser?.id,
            campId: currentCamp?.id,
            reviewId: 1,
            startDate: startDate,
            endDate: endDate,
        }
        console.log('currentUser -->', currentUser);

        dispatch(newReservation(payload))

        // bookedTitle.innerHTML = 'Booked!!!'

        console.log("Payload: -> ", payload);
        setTimeout(() => {
            history.push('/')
        }, 2000)

    }

    return (
        <div className='campDiv'>
            {/* <img className='campPics' src={currentCamp.Images[0]?.url} alt='images'/> */}
            <h1 className='campName'>{currentCamp?.campName}</h1>
            <form
            className='resForm'
            onSubmit={HandleSubmit}
            >
            <h2 id='bookingHeader'>Book Your Visit Now!</h2>
                <label className='startResLabel'>
                    Arrival Date:
                    <input
                    className='calInput'
                    type="date"
                    value={startDate}
                    onChange={(e) => {setStartDate(e.target.value);}} />
                </label>
                <label className='endResLabel'>
                    Departure Date
                    <input
                    className='calInput'
                    type="date"
                    value={endDate}
                    onChange={(e) => {setEndDate(e.target.value)}} />
                </label>
                <div id='bookingButtonDiv'>
                    {currentUser ? (
                        <button className='bookingButton'>Confirm Your Stay!</button>
                    ) : (
                        <p>Please Signup or Login to book your visit to { currentCamp?.campName }</p>
                    )}
                </div>
            </form>
        <div className='giftsDiv'>

        </div>
        </div>
    )
}

export default CampPageComponent;
