import { FRUITS } from "./constants.js";
const getSuggestions = (keyword) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        FRUITS.filter(
          (fruit) =>
            fruit.substring(0, keyword.length).toLocaleLowerCase() ===
            keyword.toLocaleLowerCase(),
        ),
      );
    }, 500);
  });
};

function debounce(callback, delay = 500) {
  let timerId;
  return function (...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}

export { getSuggestions, debounce };
