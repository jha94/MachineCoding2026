import { getSuggestions, debounce } from "./utils.js";

const input = document.getElementById("input");
const suggestion = document.getElementById("suggestion");

const appendSuggestions = (results) => {
  const fragment = document.createDocumentFragment();
  results.forEach((result) => {
    const div = document.createElement("div");
    div.innerHTML = result;
    div.setAttribute("data-key", result);
    fragment.appendChild(div);
  });
  suggestion.innerHTML = "";
  suggestion.classList.add("visible");
  suggestion.appendChild(fragment);
};

const fetchSuggestions = async (value) => {
  const searchResults = await getSuggestions(value);
  if (searchResults.length) {
    appendSuggestions(searchResults);
  }
};

const handleInput = (e) => {
  const { value } = e.target;
  console.log("value", value);

  if (value) {
    fetchSuggestions(value);
  } else {
    suggestion.classList.remove("visible");
  }
};

const handleSelect = (e) => {
  const { key } = e.target.dataset;
  input.value = key;
  suggestion.classList.remove("visible");
};

(() => {
  input.addEventListener("input", debounce(handleInput));
  suggestion.addEventListener("click", handleSelect);
})();
