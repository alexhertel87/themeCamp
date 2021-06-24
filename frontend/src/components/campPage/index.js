import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CampPage.css'
import { useParams } from 'react-router';
import { getOneCamp } from '../../store/camps';
import { newReservation } from '../../store/reservations';

function CampPageComponent({ isLoaded }) {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getOneCamp(id))
    }, [dispatch])

    const currentCamp = useSelector(state => state.camps.currentCamp);
    const currentUser = useSelector(state => state.session.user)

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())


    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = parseInt(currentUser.id, 10);
        const campId = currentCamp.id;
        const reviewId = currentCamp.id;

        const payload = {
            userId,
            campId,
            reviewId,
            startDate: startDate,
            endDate: endDate,

        }

        const reservation = dispatch(newReservation(payload))

        if (reservation) {
            const title = document.getElementById('bookedTitle');
            title.CamperHTML = "You are Booked! Enjoy your visit! And, don't forget: 'Safety Third!'"
        }

    }

    return (
        <div className='campDiv'>
            <h1>{currentCamp?.name}</h1>
            <form
            onSubmit={handleSubmit}
            >
            <h2 id='bookedTitle'>Book Your Visit Now!</h2>
                <label className='startResLabel'>
                    Start Date
                    <input
                    className='calInput'
                    type="date"
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e.target.value);
                        console.log('START DATE ========> ', e.target.value)}} />
                </label>
                <label className='endResLabel'>
                    End Date
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
