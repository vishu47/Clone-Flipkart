// import axios from '../helper/axios';
// import {productConstants} from './constants'

// export const fetchProductCategory = () => {
//     return async (dispatch) => {
//         dispatch({type:productConstants.PRODUCT_CATEGORY_REQUEST})
//         const res = await axios.get('/category/getcategories');
//         if(res.status === 200){
//             const {categoryList} = res.data;
//             dispatch({
//                 type : productConstants.PRODUCT_CATEGORY_SUCCESS,
//                 payload: {category : categoryList}
//             })
//         }else{
//             dispatch({
//                 type : productConstants.PRODUCT_CATEGORY_FAILED,
//                 payload : {error: res.data.error}
//             })

//         }
        
//     }
// }