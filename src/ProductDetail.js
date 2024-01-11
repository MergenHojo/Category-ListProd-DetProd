import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { category, productId } = useParams();

  // productId'ye göre ürünü almak için bir API çağrısı yapabilirsiniz.
  // Bu örnekte sabit bir ürün kullanılmıştır.
  const product = { id: productId, name: 'Product Name', price: 100, description: 'Product Description' };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {/* Diğer ürün detayları... */}
    </div>
  );
}

export default ProductDetail;
