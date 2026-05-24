import { FRUITS } from "./constants.js";
const getSuggestions = (keyword) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        FRUITS.filter((fruit) => {
          return (
            fruit.substring(0, keyword.length).toLocaleLowerCase() ===
            keyword.toLocaleLowerCase()
          );
        }),
      );
    }, 500);
  });
};

export { getSuggestions };
