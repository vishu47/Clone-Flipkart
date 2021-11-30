import {productConstants, categoryConstants} from '../action/constants';

const init = {
    loading : false,
    category : '',
    error: null
}

const categoryReducer = (state = init, action) => {
    console.log(action);
    switch(action.type){
        case productConstants.PRODUCT_CATEGORY_REQUEST:
            state = {
                ...state,
                loading : true,
            }
        break;
        case productConstants.PRODUCT_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading : false,
                category : action.payload.category
            }
        break;
        
        case productConstants.PRODUCT_CATEGORY_FAILED:
            state = {
                loading : false,
                error : action.payload.error
            }
        break;
        
        case categoryConstants.ADD_CATEGORY_REQUEST:
            state = {
                ...state,
                loading : true,
            }
        break;
        
        case categoryConstants.ADD_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading : false,
            }
        break;
        
        case categoryConstants.ADD_CATEGORY_FAILED:
            state = {
                loading : false,
                error : action.payload.error
            }
        break;
    }

    return state;

}

export default categoryReducer;