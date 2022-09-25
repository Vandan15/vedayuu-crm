// Action here
import axios from 'axios';
import store from '../Store/index';
import {
    SET_WEB_SETTING,
    SET_PAGE_DATA

} from "./types";

export function setWebSetting(user) {
    return {
        type: SET_WEB_SETTING,
        data: user
    }
}

export function setPageData(user) {
    return {
        type: SET_PAGE_DATA,
        data: user
    }
}
