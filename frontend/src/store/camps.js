import { csrfFetch } from './csrf';

const LOAD = 'api/camps/LOAD'
const LOAD_RECENT = 'api/camps/LOAD'
const LOAD_ONE = 'api/camps/id'

const load = (list) => ({
    type: LOAD,
    list,
});

const loadRecent = (list) => ({
    type: LOAD_RECENT,
    list,
});

const loadOne = (inn) => ({
    type: LOAD_ONE,
    inn
})

export const getcamps = () => async dispatch => {
    const response = await csrfFetch('/api/camps');

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
      }
}

export const getRecentcamps = () => async dispatch => {
    const response = await csrfFetch('/api/camps/recent');

    if (response.ok) {
        const list = await response.json();
        dispatch(loadRecent(list));
      }
}

export const getOneInn = (id) => async dispatch => {
    const response = await csrfFetch(`/api/camps/${id}`);

    if (response.ok) {
        const inn = await response.json();
        dispatch(loadOne(inn));
      }
}

const initialState = {
    list: [],
    currentInn: null,
  };

const campsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allcamps = {};
            action.list.forEach(inn => {
                allcamps[inn.id] = inn;
            });
            return {
                ...allcamps,
                ...state,
                list: action.list,
            };
        }
        case LOAD_RECENT: {
            const recentcamps = {};
            action.list.forEach(inn => {
                recentcamps[inn.id] = inn;
            });
            return {
                ...recentcamps,
                ...state,
                list: action.list,
            };
        }
        case LOAD_ONE: {
            const newState = Object.assign({}, initialState);
            newState.currentInn = action.inn;
            return newState;

        }
        default:
            return state;
    }
}

export default campsReducer;
