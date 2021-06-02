import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import { useProduct } from '../context/products';
import './Products.css';

const Products = (props) => {
  const { getProducts } = useProduct();
  const productList = getProducts();

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
