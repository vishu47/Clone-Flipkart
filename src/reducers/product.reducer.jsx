import {addProducts} from '../action/constants';

const init = {
    product : [],
    message : '',
    loading : false,
    error : ''
}

const productReducer = (state = init, action) => {

    switch (action.type) {
        case addProducts.ADD_PRODUCT_REQUEST:
            state = {
                ...state,
                loading :true,
                message : 'product is adding...'
            }
            break;
        case addProducts.ADD_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading :false,
                product : action.payload.product,
                message : ''
            }
            break;
        case addProducts.ADD_PRODUCT_FAILED:
            state = {
                loading : false,
                error : action.payload.error
            }
            break;
    
    }

    return state;

}

export default productReducer;