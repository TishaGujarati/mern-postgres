import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions/authActions';

const Register = () => {
  const dispatch:any = useDispatch();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const { firstname, lastname, email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(register(formData));
  };

  return (
   <div className="container">
     <h2>Register</h2>
     <form onSubmit={handleSubmit}>
       <div className="mb-3">
         <input
           type="text"
           name="firstname"
           className="form-control"
           placeholder="First Name"
           value={firstname}
           onChange={handleChange}
           required
         />
       </div>
       <div className="mb-3">
         <input
           type="text"
           name="lastname"
           className="form-control"
           placeholder="Last Name"
           value={lastname}
           onChange={handleChange}
           required
         />
       </div>
       <div className="mb-3">
         <input
           type="email"
           name="email"
           className="form-control"
           placeholder="Email"
           value={email}
           onChange={handleChange}
           required
         />
       </div>
       <div className="mb-3">
         <input
           type="password"
           name="password"
           className="form-control"
           placeholder="Password"
           value={password}
           onChange={handleChange}
           minLength={6}
           required
         />
       </div>
       <div>
         <button type="submit" className="btn btn-primary">Register</button>
       </div>
     </form>
   </div>
 );
};

export default Register;