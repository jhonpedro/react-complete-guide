import React from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { useProduct } from '../context/products';
import './Products.css';

const Favorites = (props) => {
  const { getProducts } = useProduct();
  const products = getProducts();

  const favoriteProducts = products.filter((elem) => elem.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
