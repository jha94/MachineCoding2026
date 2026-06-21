import { FRUITS } from "./constants.js";
const getSuggestions = (keyword) => {
  return new Promise((res, rej) => {
    const searchList = FRUITS.filter((fruit) =>
      fruit.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
    );
    setTimeout(() => {
      return res(searchList);
    }, 1000);
  });
};

function debounce(callback, delay = 500) {
  let timerID;
  return function (...args) {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

export { getSuggestions, debounce };
