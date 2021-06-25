import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './CampPage.css'
import { useParams } from 'react-router';
import { getOneCamp } from '../../store/camps';
import { newReservation } from '../../store/reservations';

import { Redirect } from 'react-router'
import { useHistory } from 'react-router'

function CampPageComponent({ isLoaded }) {
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
        console.log("Payload: -> ", payload);
        history.push('/')

    }

    return (
        <div className='campDiv'>
            <h1 className='campName'>{currentCamp?.name}</h1>
            <form
            className='resForm'
            onSubmit={HandleSubmit}
            >
            <h2 id='bookingHeader'>Book Your Visit Now!</h2>
                <label className='startResLabel'>
                    Arrival Date
                    <input
                    className='calInput'
                    type="date"
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e.target.value);}} />
                </label>
                <label className='endResLabel'>
                    Departure Date
                    <input
                    className='calInput'
                    type="date"
                    value={endDate}
                    onChange={(e) => {setEndDate(e.target.value)}} />
                </label>
                <button className='bookingButton'>Confirm Your Stay!</button>
            </form>
        </div>
    )
}

export default CampPageComponent;
