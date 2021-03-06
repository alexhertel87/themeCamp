import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCamps, getOneCamp } from '../../store/camps';
import { ReserveFromUserId } from '../../store/reservations';
import { Link } from 'react-router-dom';
// import './Reservations.css'

function ReservationsComponent({ isLoaded }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCamps())
    }, [dispatch])

    const camps = useSelector(state => state.camps)
    const reservations = useSelector(state => state.reservations.list)

    if (reservations !== undefined) {
        return (
            <div className='allRes'>
                <h2 className='resDiv'>Your Reservations</h2>
                {reservations.length !== 0 ? (
                    reservations.map((reservation, i) => (
                        <div className='reservation-1'>
                            <h3 className='reserve-head'>Reservation #{i + 1}</h3>
                            <li className='campName'>Camp: {camps[reservation.campId]?.campName}</li>
                            <li>Start of Stay: {reservation?.startDate}</li>
                            <li>End of Stay: {reservation?.endDate}</li>
                            <Link to={`/reservation/edit/${reservation.id}`} type="submit">Edit Reservation</Link>
                        </div>
                        ))
                ) : (
                        <h3 className='h3Div'>
                            <h4 className='temph4'>You have no active reservations. Would you like to book one?</h4>
                            <h4 className='temph4'>Please log in to book a stay!</h4>
                        </h3>

                )}
            </div>
        )
    } else {
        return null
    }

}

export default ReservationsComponent
