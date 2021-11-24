// import { signupConstants } from '../action/constants'

// const initialState = {
//    error : null,
//    message : '',
//    loading : true
// };

// const userReducer = (state = initialState, action) => {
//     console.log(action);
//     switch (action.type) {
//         case signupConstants.SIGNUP_REQUEST:
//             state = {
//                 ...state
//             }
//             break;

//         case signupConstants.SIGNUP_SUCCESS: 
//             state = {
//                 ...state,
//                 loading : false,
//                 register : action.payload.message
//             } 
//             break;

//         case signupConstants.SIGNUP_FAILED: 
//             state = {
//                 ...state,
//                 loading:false,
//                 error : action.payload.error
//             } 
//             break;

//         default:
//             break;
//     }
//     return state;
// }

// export default userReducer;