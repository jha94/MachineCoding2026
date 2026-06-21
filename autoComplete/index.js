import { getSuggestions, debounce } from "./utils.js";

const input = document.getElementById("input");
const suggestion = document.getElementById("suggestion");

const listSuggestions = (suggestions) => {
  const fragment = document.createDocumentFragment();
  suggestions.forEach((suggestion) => {
    const div = document.createElement("div");
    div.innerHTML = suggestion;
    // in data-test, tets can be anything
    div.setAttribute("data-tets", suggestion);
    fragment.appendChild(div);
  });
  suggestion.innerHTML = "";
  suggestion.classList.add("visible");
  suggestion.appendChild(fragment);
};

const fetchSuggestions = async (keyword) => {
  const suggestions = await getSuggestions(keyword);
  if (suggestions.length) {
    listSuggestions(suggestions);
  }
};

const handleInput = (e) => {
  const { value } = e.target;
  if (value) {
    fetchSuggestions(value);
  } else {
    suggestion.classList.remove("visible");
  }
};

const appendSearch = (e) => {
  const { tets } = e.target.dataset;
  input.value = tets;
  suggestion.classList.remove("visible");
};

(() => {
  input.addEventListener("input", debounce(handleInput));
  //   input.addEventListener("input", handleInput);
  suggestion.addEventListener("click", appendSearch);
})();
