export interface UserAttributes {
   id: number;
   firstname: string;
   lastname: string;
   email: string;
   password: string;
 }

export interface UserValidation {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface UserLoginValidation {
  email: string;
}

export interface ProductAttributes {
   id: number;
   name: string;
   description: string;
   price: number;
   stock: number;
 }