import { FRUITS } from "./constants.js";

const getSuggestions = (keyword) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        FRUITS.filter((fruit) =>
          fruit.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
        ),
      );
    }, 1000);
  });
};

function debounce(callback, delay = 500) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

export { getSuggestions, debounce };
