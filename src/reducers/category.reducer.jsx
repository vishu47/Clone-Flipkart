import {productConstants, categoryConstants} from '../action/constants';

const init = {
    loading : false,
    category : [],
    error: null
}

const buildNewCategory = (parentId, categorylist , newcategory) => {

    if(parentId == undefined){
        return [
            ...categorylist,
            {
                _id: newcategory._id,
                name: newcategory.name,
                slug: newcategory.name,
                children: []
            }
        ]
    }

    const myCategory = [];
    for(let cate of categorylist){
        if(cate._id == parentId){
            myCategory.push({
                ...cate,
                children : cate.children ? buildNewCategory(parentId , [...cate.children, {
                    _id: newcategory._id,
                    name: newcategory.name,
                    slug: newcategory.name,
                    prenetId: newcategory.parent_id,
                    children: newcategory.chidren,
                }] , newcategory) : []
            }) 
        }else{
            myCategory.push({
                ...cate,
                children : cate.children ? buildNewCategory(parentId, cate.children , newcategory) : []
            }) 
        }
    }
    return myCategory;
}

const categoryReducer = (state = init, action) => {
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
            const category = action.payload.category;
            const newadde =buildNewCategory(category.parent_id, state.category ,category) 
            console.log(newadde);
            state = {
                ...state,
                category : newadde,
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