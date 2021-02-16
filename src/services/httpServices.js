import axios from 'axios';
import { toast } from 'react-toastify';
import logger from "./logService"


axios.defaults.baseURL = process.env.REACT_APPP_API_URL;

axios.interceptors.response.use(null, error =>{
 const expectedError = error.response && error.response.status >=400 && error.response.status < 500;

 if(!expectedError){
   
  
   console.log('loggin the error', error);  
   logger.log(error)
   toast('an unexpected error occured');
 }
   
 return Promise.reject(error);

});

function setJwt(jwt){
  axios.defaults.headers.common['x-auth-token'] =jwt;

}

export default{
 get: axios.get,
 post: axios.post,
 put: axios.put,
 delete: axios.delete,
 setJwt
};