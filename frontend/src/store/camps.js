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

const loadOne = (camp) => ({
    type: LOAD_ONE,
    camp
})

export const getCamps = () => async dispatch => {
    const response = await csrfFetch('/api/camps');

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
      }
}

export const getRecentCamps = () => async dispatch => {
    const response = await csrfFetch('/api/camps/recent');

    if (response.ok) {
        const list = await response.json();
        dispatch(loadRecent(list));
      }
}

export const getOneCamp = (id) => async dispatch => {
    const response = await csrfFetch(`/api/camps/${id}`);

    if (response.ok) {
        const camp = await response.json();
        dispatch(loadOne(camp));
      }
}

const initialState = {
    list: [],
    currentCamp: null,
  };

const campsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allCamps = {};
            action.list.forEach(camp => {
                allCamps[camp.id] = camp;
            });
            return {
                ...allCamps,
                ...state,
                list: action.list,
            };
        }
        case LOAD_RECENT: {
            const recentCamps = {};
            action.list.forEach(camp => {
                recentCamps[camp.id] = camp;
            });
            return {
                ...recentCamps,
                ...state,
                list: action.list,
            };
        }
        case LOAD_ONE: {
            const newState = Object.assign({}, initialState);
            newState.currentCamp = action.camp;
            return newState;

        }
        default:
            return state;
    }
}

export default campsReducer;
