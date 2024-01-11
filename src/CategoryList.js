import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  const categories = ['computer', 'phone', 'mouse', 'printer'];

  return (
    <div >
      <h1>Categories</h1>
    
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
