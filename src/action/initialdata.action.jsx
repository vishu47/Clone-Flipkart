import {getAllCategoryData,getAllProductData} from './constants'
import axios from '../helper/axios'


export const initialData = () => {
    return async (dispatch) => {
        const res = await axios.get(`/initialdata`)
        // console.log(res.data);
        if(res.status === 200 || res.status === 201){
            const {categorylist , productslist} = res.data;
            dispatch({
                type : getAllProductData.GET_ALL_PRODUCT_SUCCESS,
                payload:  {product : productslist},
            })
        }else{
            dispatch({
                type : getAllCategoryData.GET_ALL_CATEGORY_SUCCESS,
                payload: {error: res.data.error}
            });
            dispatch({
                type : getAllProductData.GET_ALL_PRODUCT_SUCCESS,
                payload: {error: res.data.error}
            });
        }
    }
}