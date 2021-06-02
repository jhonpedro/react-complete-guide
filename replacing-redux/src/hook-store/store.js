import { useEffect, useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (mustWatch = true) => {
  const [, setState] = useState(globalState);

  const dispatch = (actionName, payload) => {
    const newState = actions[actionName](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (mustWatch) {
      listeners.push(setState);

      return () => {
        listeners = listeners.filter((listener) => listener !== setState);
      };
    }
  }, [setState, mustWatch]);

  return [globalState, dispatch];
};

export const initStore = (initialActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...initialActions };
};
