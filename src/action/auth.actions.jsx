import { authConstants } from './constants'
import axios from '../helper/axios'

export const login = (user) => {
    return async (dispatch) => {

        dispatch({type:authConstants.LOGIN_REQUEST});
        const res = await axios.post(`/admin/signin`, {
            ...user
        })
        
        if(res.status === 200){
            const {token,user} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type : authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                    user
                }    
            })
        }else if(res.status === 400){
            dispatch({
                type:authConstants.LOGIN_FAILED,
                payload:{error: res.data.status}

            })
        }
    }
}

export const isUserLoggedIn = () => {
    
    return dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            return dispatch({
                type : authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                    user
                } 
            })
        }else{
            dispatch({
                type:authConstants.LOGIN_FAILED,
                payload:{error: 'User not loggedIn'}

            })
        }
    }
}