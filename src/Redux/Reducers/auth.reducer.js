import { authConstants } from "../Actions/constants";

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  authenticated: false,
  authenticating: false,
  loading:false,
  error:'',
  message:''
};
// eslint-disable-next-line import/no-anonymous-default-export
const authReducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case authConstants.LOGIN_REQUEST: {
      const newState = {
        ...state,
        authenticating: true,
      };
      return newState;
    }
    case authConstants.LOGIN_SUCCESS:{
        const newState={
               ...state,
               token:action.payload.token,
               user:action.payload.user,
               authenticated:true,
               authenticating: false
           }
           return newState;
       }
       case authConstants.LOGIN_FAILED:{
        const newState={
               ...state,
               authenticated:false,
           }
           return newState;
       }
       case authConstants.LOGOUT_REQUEST:{
         const newState={
           ...state,
           loading:true
         }
         return newState
       }
       case authConstants.LOGOUT_SUCCESS:{
        const newState={
          ...initState,
        }
        return newState
      }
      case authConstants.LOGOUT_FAILED:{
        const newState={
               ...state,
               error:action.payload,
               loading:false
           }
           return newState;
       }
       default:{
           return state
       }
  }
};

export default authReducer;