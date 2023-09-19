import express from 'express';
import {
   loginController,
   registerController,
   productController,
   addCartController,
 } from "../controllers/productController";

const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController);

router.post('/product', productController);

router.post('/addCart/:id', addCartController);

export default router;