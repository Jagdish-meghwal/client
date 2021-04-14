import axios from 'axios';
//import { response } from 'express';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERRORT} from '../../constants/constants.js'

export const registerUser=(name,email,password)=>async dispatch=>{
    try{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const body=JSON.stringify({email,password});
        const response=await axios.post('http://localhost:3000/api/users/register',body,config);

        dispatch({
            type:REGISTER_SUCCESS,
            payload:response.data
        });
    }catch(error){
        dispatch({type:REGISTER_FAIL,payload:error})
    }
}

