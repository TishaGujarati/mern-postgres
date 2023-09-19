import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productAction';

const AddProduct = () => {
  const dispatch:any = useDispatch();
  const [productData, setProductData] = useState({
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  const { name, description, price, stock } = productData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addProduct(productData));
  };

  return (
   <div className="container">
     <h2>Add Product</h2>
     <form onSubmit={handleSubmit}>
       <div className="mb-3">
         <input
           type="text"
           name="name"
           className="form-control"
           placeholder="Product Name"
           value={name}
           onChange={handleChange}
           required
         />
       </div>
       <div className="mb-3">
         <textarea
           name="description"
           className="form-control"
           placeholder="Product Description"
           value={description}
           onChange={handleChange}
           required
         />
       </div>
       <div className="mb-3">
         <input
           type="number"
           name="price"
           className="form-control"
           placeholder="Price"
           value={price}
           onChange={handleChange}
           required
         />
       </div>
       <div className="mb-3">
         <input
           type="number"
           name="stock"
           className="form-control"
           placeholder="Stock"
           value={stock}
           onChange={handleChange}
           required
         />
       </div>
       <div>
         <button type="submit" className="btn btn-primary">Add Product</button>
       </div>
     </form>
   </div>
 );
};

export default AddProduct;