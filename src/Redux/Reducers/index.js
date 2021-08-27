import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from './user.reducer'
import productReducer from "./products.reducers"
import orderReducer from "./order.reducer"
import categoryReducer from "./category.reducers"


const rootReducer=combineReducers({
    authReducer,userReducer,productReducer,orderReducer,categoryReducer
})

export default rootReducer