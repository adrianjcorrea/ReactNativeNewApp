import {createStore, combineReducers} from 'redux';
import placesReducer from './places.js'

const rootReducer = conbineReducers({
  places: placesReducer
})

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
