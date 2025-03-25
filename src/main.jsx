import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/signin">Sign In</Link> |
          <Link to="/signup">Sign Up</Link> |
          <Link to="/products">Products</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductPage />} /> {/* Dynamic route for product details */}
        <Route path="/" element={<ProductList />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;

     




