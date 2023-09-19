import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';

const LoginPage: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch:any = useDispatch();
  const error = useSelector((state:any) => state.auth.error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
   <div className="container">
     <h2>Login</h2>
     {error && <div className="alert alert-danger">{error}</div>}
     <form onSubmit={handleSubmit}>
       <div className="mb-3">
         <input
           type="email"
           name="email"
           className="form-control"
           placeholder="Email"
           value={credentials.email}
           onChange={handleChange}
         />
       </div>
       <div className="mb-3">
         <input
           type="password"
           name="password"
           className="form-control"
           placeholder="Password"
           value={credentials.password}
           onChange={handleChange}
         />
       </div>
       <div>
         <button type="submit" className="btn btn-primary">Login</button>
       </div>
     </form>
   </div>
 );
};

export default LoginPage;