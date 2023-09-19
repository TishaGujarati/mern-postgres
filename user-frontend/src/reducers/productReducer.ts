import { ProductData, ProductState } from "../interfaces/interface";


const initialState: ProductState = {
   products: [],
   productCart:[],
   error: null,
 };


 
 type ProductAction =
   | { type: 'ADD_PRODUCT_SUCCESS'; payload: ProductData }
   | { type: 'ADD_PRODUCT_ERROR'; error: any }
   | { type: 'ADD_CART_SUCCESS'; payload: ProductData }
   | { type: 'ADD_CART_ERROR'; error: any };
 
 const productReducer = (
   state: ProductState = initialState,
   action: ProductAction
 ): ProductState => {
   switch (action.type) {
     case 'ADD_PRODUCT_SUCCESS':
       return {
         ...state,
         products: [...state.products, action.payload],
         error: null,
       };
     case 'ADD_PRODUCT_ERROR':
     case 'ADD_CART_ERROR':
       return {
         ...state,
         error: action.error,
       };
     case 'ADD_CART_SUCCESS':
      return {
         ...state,
         productCart: [...state.productCart, action.payload],
         error: null,
       };
     default:
       return state;
   }
 };
 
 export default productReducer;