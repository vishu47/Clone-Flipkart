import axios from '../helper/axios';
import {addProducts} from './constants'

export const addProduct = (form) => {
    return async (dispatch) => {
        dispatch({type:addProducts.ADD_PRODUCT_REQUEST})
        const res = await axios.post(`/product/create`, form);
        if(res.status === 200 || res.status === 201){
            const {product} = res.data;
            dispatch({
                type : addProducts.ADD_PRODUCT_SUCCESS,
                payload: {product : product}
            })
        }else{
            dispatch({
                type : addProducts.ADD_PRODUCT_FAILED,
                payload : {error: res.data.error}
            })

        }
        
    }
}