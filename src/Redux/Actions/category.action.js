import axios from "../../helper/aixos"
import { categoryConstants } from "./constants"

export const getAllCategory=()=>{
    return async (dispatch)=>{
        dispatch({
            type:categoryConstants.GET_ALL_CATEGORY_REQUEST
        })
        const res=await axios.get('/categories')
        if(res.status ===200){
            const{categoryList}=res.data
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                payload: categoryList
            })
        }
    }
}

export const addCategory=(categoryInfo)=>{
    return async (dispatch)=>{
        dispatch({
            type:categoryConstants.ADD_CATEGORY_REQUEST
        })
        const res= await axios.post('/category/create',categoryInfo)
        if(res.status ===200){
            dispatch({
                type:categoryConstants.ADD_CATEGORY_SUCCESS,
                payload:{
                    category:res.data.data
                }
            })
        }else{
            dispatch({
                type:categoryConstants.ADD_CATEGORY_FAILED,
                payload:res.data.error
            })
        }
    }
}