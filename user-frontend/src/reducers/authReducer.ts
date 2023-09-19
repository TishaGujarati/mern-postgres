import { AuthState, UserData } from "../interfaces/interface";

const initialState: AuthState = {
   isAuthenticated: false,
   user: null,
   error: null,
 };
 
 type AuthAction =
   | { type: 'LOGIN_SUCCESS'; payload: UserData }
   | { type: 'LOGIN_ERROR'; error: any }
   | { type: 'REGISTER_SUCCESS'; payload: UserData }
   | { type: 'REGISTER_ERROR'; error: any };
 
 const authReducer = (
   state: AuthState = initialState,
   action: AuthAction
 ): AuthState => {
   switch (action.type) {
     case 'LOGIN_SUCCESS':
     case 'REGISTER_SUCCESS':
       return {
         ...state,
         isAuthenticated: true,
         user: action.payload,
         error: null,
       };
     case 'LOGIN_ERROR':
     case 'REGISTER_ERROR':
       return {
         ...state,
         isAuthenticated: false,
         user: null,
         error: action.error,
       };
     default:
       return state;
   }
 };
 
 export default authReducer;