import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../actions/productAction';

const AddCart = () => {
  const dispatch:any = useDispatch();

  const handleAddToCart = (id:string) => {
    dispatch(addCart(id));
  };

  return (
   <div className="container">
     <h2>Add to Cart</h2>
     <button onClick={() => handleAddToCart} className="btn btn-primary">Add to Cart</button>
   </div>
 );
};

export default AddCart;