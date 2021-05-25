import { createStore } from 'redux';

const INITIAL_VAlUE = {
  counter: 0,
  showCounter: true,
};

const mainReducer = (state = INITIAL_VAlUE, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, counter: state.counter + 1 };
    }
    case 'DECREMENT': {
      return { ...state, counter: state.counter - 1 };
    }
    case 'INCREMENT_BY': {
      return { ...state, counter: state.counter + action.payload };
    }
    case 'TOGGLE_COUNTER': {
      return { ...state, showCounter: !state.showCounter };
    }
    default: {
      return { ...state };
    }
  }
};

const store = createStore(mainReducer);

export default store;
