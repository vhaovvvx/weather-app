import { applyMiddleware } from 'redux-zero/middleware';
import createStore from 'redux-zero';

const initialState = {
  data: undefined,
  nameCity: 'Ha Noi',
  error: '',
};

const store = createStore(initialState);

export default store;
