import { FRUITS } from "./constant.js";
const getSuggestions = (keyword) => {
  // return FRUITS.filter(fruit=>fruit.substring(0, keyword.length).toLocaleLowerCase()===keyword.toLocaleLowerCase())
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        FRUITS.filter(
          (fruit) =>
            fruit.substring(0, keyword.length).toLocaleLowerCase() ===
            keyword.toLocaleLowerCase(),
        ),
      );
    }, 1000);
  });
};

const debounce = function (callback, delay = 1000) {
  let timerID;
  return function (...args) {
    clearTimeout(timerID);
    const context = this;
    timerID = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

export { getSuggestions, debounce };
