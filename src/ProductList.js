import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductList() {
  const { category } = useParams();

  // Kategoriye özgü ürünleri almak için bir API çağrısı yapabilirsiniz.
  // Bu örnekte sabit bir liste kullanılmıştır.
  const products = [
    { id: '1', name: 'Product 1', price: 100, description: 'Description for Product 1' },
    { id: '2', name: 'Product 2', price: 150, description: 'Description for Product 2' },
    // Diğer ürünler...
  ];

  return (
    <div>
      <h1>{category} Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/category/${category}/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
