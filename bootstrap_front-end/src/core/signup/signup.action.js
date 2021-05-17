import {httpRequest} from '../../main/http';

import { SIGNUP_ACTION_TYPE } from "./signup.type";
import { SIGNUP_API } from "./signup.constant";

export function signupFormUploadData(data) {
    return async (dispatch) => {
        dispatch({
            type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING,
        });
        try {
            await httpRequest({
                method: SIGNUP_API.SIGNUP_STORE_UPLOAD.METHOD,
                url: SIGNUP_API.SIGNUP_STORE_UPLOAD.ENDPOINT,
                data,
            });
            dispatch({
                type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS,
            });
        } catch (error) {
            console.log(error)
            dispatch({
                type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR,
            });
        }
    }
}