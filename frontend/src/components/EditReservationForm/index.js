import './EditReservation.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneReservation, newReservation } from '../../store/reservations';
import { getOneCamp } from '../../store/camps';
import { cancelReservation } from '../../store/reservations';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router';

function EditReservationForm() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneReservation(id))
    }, [dispatch, id]);


    const currentReservation = useSelector(state => state.reservations.currentReservation);

    useEffect(() => {
        dispatch(getOneCamp(currentReservation?.campId))
    }, [dispatch, currentReservation?.campId])

    
    const currentCamp = useSelector(state => state.camps.currentCamp);


    const reservationDiv = document.getElementById('reservationDiv')

    const handleDelete = async (e) => {
        e.preventDefault();

        dispatch(cancelReservation(currentReservation?.id))

        // reservationDiv.innerHTML = 'Cancelled!!!'

        setTimeout(() => {
            history.push('/')
        }, 2000)

    }

    return (
        <div>
            <h1 id='reservationDiv'>Your Reservation for {currentCamp?.campName}</h1>
            <form onSubmit={handleDelete}>
                <button type="submit">Delete Reservation</button>
            </form>
        </div>
    )
}

export default EditReservationForm;
