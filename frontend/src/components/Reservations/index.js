import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCamps, getOneCamp } from '../../store/camps';
import { ReserveFromUserId } from '../../store/reservations';
import './Reservations.css'

function ReservationsComponent({ isLoaded }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCamps())
    }, [dispatch])

    const camps = useSelector(state => state.camps)
    const reservations = useSelector(state => state.reservations.list)

    if (reservations !== undefined) {
        return (
            <div className='reservations-div'>
                <h2 className='resDiv'>Your Reservations</h2>
                {reservations.length !== 0 ? (
                    reservations.map((reservation, i) => (
                        <div className='reservation-1'>
                            <h3 className='reserve-head'>Reservation #{i + 1}</h3>
                            <li>Camp: {camps[reservation.campId]?.campName}</li>
                            <li>Start of Stay: {reservation?.startDate}</li>
                            <li>End of Stay: {reservation?.endDate}</li>
                        </div>
                        ))
                ) : (
                    <h3 className='h3Div'>You have no active reservations. Would you like to book one?</h3>
                )}
            </div>
        )
    } else {
        return null
    }

}

export default ReservationsComponent
