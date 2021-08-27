import { productConstants } from "../Actions/constants"


const initState={
    loading:false,
    message:'',
    error:null,
    products:[]
}

const productReducer=(state=initState,action)=>{
    switch(action.type){
        case productConstants.ADD_PRODUCTS_REQUEST:{
            const newState={
                ...state
            }
            return newState
        }
        case productConstants.ADD_PRODUCTS_SUCCESS:{
            const newState={
                ...state,
                message:action.payload,
                loading:true
            }
            return newState
        }
        case productConstants.ADD_PRODUCTS_FAILED:{
            const newState={
                ...initState,
                loading:false
            }
            return newState
        }
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:{
            const newState={
                ...state,
                products:action.payload
            }
            return newState
        }
        default:{
            return state
        }
    }
}

export default productReducer