import users from "../models/user";
import products from "../models/product"
import bcrypt from "bcrypt";
import { UserLoginValidation, UserValidation } from "../interfaces/interface";
import { error } from "console";

const validateRegisterInput = (data: UserValidation) => {
  const { firstname, lastname, email, password } = data;

  if (!firstname.trim() || !lastname.trim()) {
    throw error("Invalid Firstname and Lastname");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw error("Invalid Email.");
  }
//   if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
//     throw error(
//       "Invalid Password"
//     );
//   }
};

export const register = async (
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  
  try {
    validateRegisterInput({ firstname, lastname, email, password });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await users.create({id,firstname,lastname,email,password: hashedPassword});
    return newUser;
  } catch (error) {
    throw error;
  }
};

const validateLoginInput = (data: UserLoginValidation) => {
  const { email } = data;
  if (!email ) {
    throw error("Email required");
  }
};


export const login = async (email: string, password: string) => {
  try {
    validateLoginInput({ email });

    const login = await users.findOne({
      where: { email },
    });
    if (!login) {
      throw null;
    }

    const isPasswordValid = await bcrypt.compareSync(
      password,
      login.password
    );

    if (!isPasswordValid) {
      return { error: "Incorrect password" };
    }

    return login;
  } catch (error) {
   throw error;
  }
};

export const productAdd = async (
   id: number,
   name: string,
   description: string,
   price: number,
   stock: number
 ) => {
   
   try {
     const product = await products.create({id,name,description,price,stock});
     return product;
   } catch (error) {
     throw error;
   }
 };

 export const addCart = async (id: number) => {
   try {
     const addProduct = await products.findOne({
       where: { id },
     });
 
     if (!addProduct) {
       throw null;
     }
 
     return addProduct;
   } catch (error) {
    throw error;
   }
 };