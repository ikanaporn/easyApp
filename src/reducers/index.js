import { combineReducers } from "redux";
import fetchReducer from './fetchReducer';
import InfomationInitial from './InfomationInitial';

import {
    INFO_DATA,
    NavigationName,
} from '../constants';

var num = 0
const INFO_INITIAL_STATE = {
    name: 'InitialReducer',
    info_id: num,
    info: InfomationInitial[num]
}
const makeReducer = (initialState, Initial, name) => (state = initialState, action) => {
    if (name !== action.name) return state;
    else if(name === "InfomationReducer") {
       
        return {
            name: 'InitialReducer',
            info_id: num,
            info: InfomationInitial[num]
        }
        
    }
}

export default combineReducers({
    fetchReducer: fetchReducer,
    InfomationReducer: makeReducer(INFO_INITIAL_STATE, InfomationInitial, 'InfomationReducer'),
    //InfomationReducer: InfomationReducer
})