import { useStore } from './store';

const useSelector = (callback) => {
  const [globalstate] = useStore();

  return callback(globalstate);
};

export default useSelector;
