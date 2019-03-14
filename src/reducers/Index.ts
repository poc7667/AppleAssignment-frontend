import { combineReducers } from 'redux';
import {IndexReducer} from "./IndexReducer";
export default combineReducers({
    indexStore: IndexReducer
});
