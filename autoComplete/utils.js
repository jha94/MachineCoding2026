import { FRUITS } from "./constants.js";
const getSuggestion = (keyword) => {
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

function debounce(callback, delay=300) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

export { getSuggestion, debounce };
