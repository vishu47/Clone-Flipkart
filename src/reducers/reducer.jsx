import authReducer from './auth.reducer'
import userReducer from './user.reducer'
import orderReducer from './order.reducer'
import productReducer from './product.reducer'
import categoryReducer from './category.reducer'
import { combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth : authReducer,
    product : productReducer,
    order : orderReducer,
    category : categoryReducer,
})

export default rootReducer;