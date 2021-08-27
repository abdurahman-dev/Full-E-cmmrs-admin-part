import { userConstants } from "../Actions/constants"

const initState={
    error:null,
    message:'',
    loading:false
}

const userReducer=(state=initState,action)=>{

    switch(action.type){
        case userConstants.USER_SIGNUP_REQUEST:{
            const newState={
                ...state,
                loading:true
            }
            return newState
        }
        case userConstants.USER_SIGNUP_SUCCESS:{
            const newState={
            ...state,
            message:action.payload,
            loading:false
            }
            return newState
        }
        case userConstants.USER_SIGNUP_FAILED:{
            const newState={
            ...state,
            message:action.payload,
            loading:false
            }
            return newState
        }
        default:{
            return state
        }
    }
}

export default userReducer