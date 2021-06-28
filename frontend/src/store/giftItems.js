import { csrfFetch } from './csrf';

const LOAD = 'api/camps/LOAD'
const LOAD_CAMPS_GIFTS = 'api/gift/LOAD_CAMPS_GIFTS'

const loadGifts = (list) => ({
  type: LOAD,
  list,
});
const loadCampsGifts = (gifts) => ({
  type: LOAD_CAMPS_GIFTS,
  gifts
})

export const getGifts = () => async dispatch => {
  const response = await csrfFetch('/api/camps/giftItems');

  if (response.ok) {
      const list = await response.json();
      dispatch(loadGifts(list));
    }
}

export const getCampsGifts = (id) => async dispatch => {
  const response = await csrfFetch(`/api/camps/${id}`);

  if (response.ok) {
      const gifts = await response.json();
      dispatch(loadCampsGifts(gifts));
    }
}
const initialState = {
  list: [],
  allGifts: [],
};

const giftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allGifts = {};
      action.list.forEach(gift => {
        allGifts[gift.id] = gift;
      })
      return {
        ...allGifts,
        ...state,
        list: action.list
      }
    }
    case LOAD_CAMPS_GIFTS: {
      const newState = Object.assign({}, initialState);
      newState.currentCamp = action.gifts;
      return newState;
  }
    default: return state;
  }
}

export default giftsReducer
