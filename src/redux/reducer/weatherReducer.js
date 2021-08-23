import {
  GET_DATA_SUCCESS,
  FIND_CITY_FAIL,
  FIND_CITY_SUCCESS,
} from '../../redux/actions/actions';

const inittialState = {
  data: [],
  nameCity: 'Ha Noi',
  error: '',
};

const weatherReducer = (state = inittialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return { ...state, data: action.data };
    case FIND_CITY_SUCCESS:
      return {
        ...state,
        data: action.data,
        nameCity: action.nameCity,
        error: '',
      };
    case FIND_CITY_FAIL:
      return { ...state, error: 'Not found city (404)' };

    default:
      return state;
  }
};

export default weatherReducer;
