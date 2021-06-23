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


    //userId, CampId, start_date, end_date, price
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
            title.CamperHTML = 'Booked!!'
        }

    }

    return (
        <div className='campDiv'>
            <h1>{currentCamp?.name}</h1>
            <form
            onSubmit={handleSubmit}
            >
            <h2 id='bookedTitle'>Book Now!</h2>
                <label>
                    Start Date
                    <input
                    type="date"
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e.target.value);
                        console.log('START DATE ========> ', e.target.value)}} />
                </label>
                <label>
                    End Date
                    <input
                    type="date"
                    value={endDate}
                    onChange={(e) => {setEndDate(e.target.value)}} />
                </label>
                <button>Confirm Booking</button>
            </form>
        </div>
    )
}

export default CampPageComponent;
