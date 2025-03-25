import React from 'react';
import { Link } from 'react-router-dom';

const dailyProducts = [
  { id: 1, name: 'Toothbrush', price: 2.99 },
  { id: 2, name: 'Shampoo', price: 7.99 },
  { id: 3, name: 'Conditioner', price: 8.99 },
  { id: 4, name: 'Body Wash', price: 5.99 },
];

const electronicsProducts = [
  { id: 5, name: 'Laptop', price: 1299.99 },
  { id: 6, name: 'Headphones', price: 99.99 },
  { id: 7, name: 'Smartphone', price: 699.99 },
  { id: 8, name: 'Smartwatch', price: 199.99 },
];

function ProductList() {
  return (
    <div>
      <h1>Daily Usage Products</h1>
      <ul>
        {dailyProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name} - ${product.price}</Link>
          </li>
        ))}
      </ul>
      <h1>Electronics</h1>
      <ul>
        {electronicsProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name} - ${product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
