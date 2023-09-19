import { Request, Response } from 'express';
import {
   login,
   register,
   productAdd,
   addCart,
 } from '../services/productService';

export const registerController = async (req: Request, res: Response) => {
  const { id, firstname, lastname, email, password } = req.body;
  try {
    const newUser = await register(id, firstname, lastname, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await login(email,password);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

export const productController = async (req: Request, res: Response) => {
   const { id, name, description, price, stock } = req.body;
   try {
     const product = await productAdd(id, name, description, price, stock );
     res.status(201).json(product);
   } catch (error) {
     res.status(500).json({ error: 'Error in Adding Product' });
   }
 };

export const addCartController = async (req: Request, res: Response) => {
   const { id } = req.params;
   try {
      const timestamp = Date.parse(id);
    
      if (isNaN(timestamp)) {
        throw new Error('Invalid ISO date format');
      }
     const productCart = await addCart(timestamp);
     res.status(200).json(productCart);
   } catch (error) {
     res.status(404).json({ error: 'Error in Adding Cart' });
   }
 };