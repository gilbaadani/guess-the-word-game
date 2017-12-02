import rootReducer from '../reducers';
import { createStore } from 'redux';

let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const initialState = {
  lettesButtons: capitalLetters.map(item => ({ letter: item, isVisible: true, key: item }))
};

export default createStore(rootReducer, initialState);
