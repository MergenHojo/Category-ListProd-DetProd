
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div>
    <Router>
    
      <Routes>
        <Route path="/" exact element={<CategoryList/>} />
        <Route path="/category/:category"  element={<ProductList/>} />
        <Route path="/category/:category/:productId" element={<ProductDetail/>} />
        </Routes>
     
    </Router>
    
    </div>
  );
}


export default App;

