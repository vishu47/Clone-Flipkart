import { authConstants , signupConstants} from '../action/constants'

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
    error : null,
    message : '',
    loading : true,
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
                ...initialState,
                loading : true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initialState,
                loading : false
            }
            break;
        case authConstants.LOGOUT_FAILED:
            state = {
                ...initialState,
                loading : false,
                error: action.payload.error
            }
            break;
        case signupConstants.SIGNUP_REQUEST:
            state = {
                ...state
            }
            break;

        case signupConstants.SIGNUP_SUCCESS: 
            state = {
                ...state,
                loading : false,
                message : action.payload.message
            } 
            break;

        case signupConstants.SIGNUP_FAILED: 
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            } 
            break;

    }

    return state;
}

export default authReducer;