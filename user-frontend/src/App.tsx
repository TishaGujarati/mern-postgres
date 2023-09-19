import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/loginForm';
import Register from './components/registerForm';
import AddProduct from './components/addProduct';
import AddCart from './components/addCart';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route
            path="/product"
            Component={AddProduct}/>
          <Route
            path="/addCart/:id"
            Component={AddCart}/>
        </Routes>
      </Router>
  );
}

export default App;