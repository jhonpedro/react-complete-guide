import { createStore } from 'redux';

const INITIAL_VAlUE = {
  counter: 0,
};

const mainReducer = (state = INITIAL_VAlUE, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { counter: state.counter + 1 };
    }
    case 'DECREMENT': {
      return { counter: state.counter - 1 };
    }
    default: {
      return { ...state };
    }
  }
};

const store = createStore(mainReducer);

export default store;
