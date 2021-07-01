import { csrfFetch } from './csrf';

const NEW_RESERVATION = 'reservation/new'
const GET_RESERVATIONS = 'reservations/get'
const LOAD_ONE = 'reservations/get/one'
const DELETE_RESERVATION = 'reservations/delete'

const addReservation = (payload) => ({
    type: NEW_RESERVATION,
    payload
})

const getReservations = (payload) => ({
    type: GET_RESERVATIONS,
    payload
})

const loadOne = (payload) => ({
    type: LOAD_ONE,
    payload
})

const deleteReservation = (payload) => ({
    type: DELETE_RESERVATION,
    payload
})

export const cancelReservation = id => async dispatch => {
    const response = await csrfFetch(`/api/reservations/user/${id}`, {
        method: 'DELETE',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(id)
    })
    if (response.ok) {
        const reservation = await response.json();
        dispatch(deleteReservation(reservation));
        // return reservation
        return 'DELETED'
    }
}

export const newReservation = payload => async dispatch => {
    console.log("Payload ----> ", payload);
    const response = await csrfFetch(`/api/reservations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const reservation = await response.json();
        dispatch(addReservation(reservation));
        return reservation;
    }
};

export const ReserveFromUserId = id => async dispatch => {
    const response = await csrfFetch(`/api/reservations/user/${id}`, {
    });

    if (response.ok) {
        const reservation = await response.json();
        dispatch(getReservations(reservation));
        return reservation;
    }
};

export const getOneReservation = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reservations/${id}`);

    if (response.ok) {
        const reservation = await response.json();
        dispatch(loadOne(reservation));
      }
}

const initialState = {
    list: [],
    reservation: null
}

const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_RESERVATION: {
            const newState = {
                ...state,
                reservation: action.payload
            }
            return newState
        }
        case GET_RESERVATIONS: {
            const newState = {
                ...state,
                list: action.payload
            }
            return newState
        }
        // case DELETE_RESERVATION: {
        //     const newState = {
        //         ...state,
        //         reservations: action.payload
        //     }
        //     return newState
        // }
        case LOAD_ONE: {
            const newState = {
                ...state,
                reservation: action.payload
            }
            return newState
        }
        default:
            return state;
    }
}

export default reservationsReducer;
