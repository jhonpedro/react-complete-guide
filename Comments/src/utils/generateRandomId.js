const generateRandomId = () => {
  return `${Date.now()}_${Math.random() * 10}`;
};

export default generateRandomId;
