import React, { createContext, useContext, useState } from 'react';

const initial_value = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false,
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false,
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false,
  },
];

const ProductContext = createContext({
  toggleFav: () => {},
  getProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initial_value);

  const toggleFav = (productId) => {
    setProducts((prevState) => {
      const newState = [...prevState];
      const productIdIndex = newState.findIndex(
        (elem) => elem.id === productId
      );

      newState[productIdIndex].isFavorite =
        !newState[productIdIndex].isFavorite;

      return newState;
    });
  };

  const getProducts = () => products;

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        toggleFav,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const ctx = useContext(ProductContext);

  if (!ctx) {
    throw new Error('useProduct must be inside a provider');
  }

  return ctx;
};
