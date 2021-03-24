import { SET_LOADING, RESET_LOADING } from '../actions/loadingActions';

const initState = false;

export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING: {
      return { ...state, loading: payload };
    }

    case RESET_LOADING: {
      return initState;
    }

    default:
      return state;
  }
}
