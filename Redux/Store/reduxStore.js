import {createStore , combineReducers} from 'redux';
import { contactReducer} from '../Reducers/reduxReducers';
import { modeReducer } from "../Reducers/modeReducer";


export const rootReducer = combineReducers({
  one :contactReducer,
  two :modeReducer,
});

export const store = createStore(rootReducer);