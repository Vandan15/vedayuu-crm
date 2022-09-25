// import _ from 'lodash';
import {
    SET_PAGE_DATA,
    SET_WEB_SETTING
} from '../Actions/types';

const initialState = {
    web_setting:'',
    page_data:''

}

const reducer = (state = initialState, action) => {
    console.log('',action)
    switch (action.type) {
        case SET_WEB_SETTING: return {
            ...state,
            web_setting: action.data
        }
        break;
        case SET_PAGE_DATA: return {
            ...state,
            page_data: action.data
        }
        break;
        default: return state;
    }
}

export default reducer;