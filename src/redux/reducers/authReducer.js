import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    
} from '../../constants/constants.js'


const initialState={
    token:localStorage.getItem('token'),
    isLoggedIn:false,
    errors:[]
}

const authReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case REGISTER_SUCCESS:
            localStorage.getItem('token');
            return{
                ...state,
                isLoggedIn:true
            }

      
        case REGISTER_FAIL:
            localStorage.removeItem('token');               
             return{
                    ...state,
                    isLoggedIn:false,
                    error:payload
                }
        
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                isLoggedIn:false,
                error:payload
            }
        default:
            return state;
    }
}

export default authReducer;