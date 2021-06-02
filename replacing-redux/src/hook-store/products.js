import { initStore } from './store';

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

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const newProductState = [...curState.products];
      const productIdIndex = newProductState.findIndex(
        (elem) => elem.id === productId
      );

      newProductState[productIdIndex].isFavorite =
        !newProductState[productIdIndex].isFavorite;

      return { products: newProductState };
    },
  };
  initStore(actions, { products: initial_value });
};

export default configureStore;
