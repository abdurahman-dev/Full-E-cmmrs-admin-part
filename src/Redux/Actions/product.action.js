import { productConstants } from "./constants"
import axios from "../../helper/aixos"


export const addProducts=(productInfo)=>{
    return async (dispatch)=>{
        console.log(productInfo);
        dispatch({
            type:productConstants.ADD_PRODUCTS_REQUEST
        })
        const res= await axios.post('/product/addProduct',productInfo)
        
        if(res.status ===200){
            dispatch({
                type:productConstants.ADD_PRODUCTS_SUCCESS,
                payload:res.data.message
            })
        }
    }
}


