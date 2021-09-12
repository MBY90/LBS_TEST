import{
    GET_USER_FAILURE,
    GET_USER_SUCCESS
} from './Type';
import axios from 'axios';
export const getUser=()=>(dispatch)=>{
axios.get('https://api.test-technique.smala.co/v1/984465/users')
.then(res=>{
    dispatch({
        payload: res.data, type:GET_USER_SUCCESS
      })
}).catch(err=>{
    dispatch({
        type:GET_USER_FAILURE,
        payload:err
    })
}

)

}