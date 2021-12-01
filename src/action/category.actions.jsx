import axios from '../helper/axios';
import {productConstants,categoryConstants} from './constants'

export const fetchProductCategory = () => {
    return async (dispatch) => {
        dispatch({type:productConstants.PRODUCT_CATEGORY_REQUEST})
        const res = await axios.get(`/category/getcategories`);
        if(res.status === 200){
            const {categoryList} = res.data;
            dispatch({
                type : productConstants.PRODUCT_CATEGORY_SUCCESS,
                payload: {category : categoryList}
            })
        }else{
            dispatch({
                type : productConstants.PRODUCT_CATEGORY_FAILED,
                payload : {error: res.data.error}
            })

        }
        
    }
}

export const addCategory = (form) => {
    return async dispatch => {
        dispatch({type : categoryConstants.ADD_CATEGORY_REQUEST});
        const res = await axios.post(`/category/create`, form);
        if(res.status == 200){
            dispatch({
                type : categoryConstants.ADD_CATEGORY_SUCCESS,
                payload : {category : res.data.category}
            })
        }else{
            dispatch({
                type : categoryConstants.ADD_CATEGORY_FAILED,
                payload : {error: res.data.error}
            })
        }
    }
}