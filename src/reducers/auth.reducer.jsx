import { authConstants } from '../action/constants'

const initialState = {
    token : null,
    user:{
        email: '',
        firstname: '',
        lastname: '',
        role:'',
        picture:'',
        _id:''
    },
    authenticate : false,
    authenticating: false
};

const authReducer = (state = initialState, action) => {

    console.log(action)

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating : true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                token: action.payload.token,
                authenticating : false,
                authenticate : true,
                user: action.payload.user,

            }
            break
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...initialState
            }
            break
    }

    return state;
}

export default authReducer;