export interface ProductState {
   products: ProductData[];
   productCart: ProductCart[];
   error: any;
 }
 
export interface ProductData {
   id: string;
   name: string;
   description: string;
   price: number;
   stock: number;
 }

export interface ProductCart{
   id: string;
   name: string;
   description: string;
   price: number;
   stock: number;
 }

export interface AuthState {
   isAuthenticated: boolean;
   user: UserData | null;
   error: any;
 }
 
export interface UserData {
   firstname: string;
   lastname: string;
   email: string;
 }

 export interface UserData {
   firstname: string;
   lastname: string;
   email: string;
   password: string;
 }

export interface ProductData {
  name: string;
  description: string;
  price: number;
  stock: number;
}