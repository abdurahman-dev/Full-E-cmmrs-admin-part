import axios from '../../helper/aixos'
import { categoryConstants, productConstants } from './constants';

export const initialData=()=>{
    return async (dispatch)=>{
        const res= await axios.post('/initialData')
        if(res.status ===200){
            const{categories,product}=res.data
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                payload:categories
            })
            dispatch({
                type:productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload:product
            })
        }
    }
}