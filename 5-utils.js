const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

const addValuesInArray = (array) => {
  let total = 0;
  array.forEach((element) => {
    total += element;
  });
  return total;
};

module.exports = { sayHi, addValuesInArray };
