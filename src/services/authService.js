import jwtDecode from 'jwt-decode';
import http from './httpServices'


const apiEndPoint ="/auth";
const tokenKey = "token";


http.setJwt(getJwt());

export async function login(email, password){
 const{data: jwt} = await http.post(apiEndPoint, {email, password});
 localStorage.setItem(tokenKey, jwt);

}

 export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
 }


export function logout(){
 localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
 try {
  const jwt = localStorage.getItem(tokenKey);
   const user =jwtDecode(jwt);
   return user;
  
} catch (ex) {
 return null;
}
}

export function getJwt(){
 return localStorage.getItem(tokenKey);
}
export default{
 login,
 loginWithJwt,
 logout,
 getCurrentUser,
 getJwt
};