const groceriesList = () => {
  const result = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(obj)) {
    result.set(key, obj[key]);
  }
  return result;
};

export default groceriesList;
