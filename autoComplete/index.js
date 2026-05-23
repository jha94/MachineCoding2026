import { debounce, getSuggestions } from "./utils.js";

const searchInput = document.getElementById("searchInput");
const suggestionWrap = document.getElementById("suggestionWrap");
const clearSuggestion = () => {
  suggestionWrap.innerHTML = "";
};
const listSuggestions = async (e) => {
  const value = e.target.value;
  if (value) {
    const results = await getSuggestions(e.target.value);
    console.log(results);

    if (results.length) {
      appendSuggestions(results);
    }
  } else {
    clearSuggestion();
  }
};

const appendSuggestions = (results) => {
  const fragment = document.createDocumentFragment();
  results.map((result) => {
    const div = document.createElement("div");
    div.innerHTML = result;
    div.setAttribute("data-key", result);
    fragment.appendChild(div);
  });
  suggestionWrap.innerHTML = "";
  suggestionWrap.appendChild(fragment);
};

const setSuggestion = (e) => {
  const { key } = e.target.dataset;
  searchInput.value = key;
  clearSuggestion();
};

(() => {
  searchInput.addEventListener("input", debounce(listSuggestions));
  suggestionWrap.addEventListener("click", setSuggestion);
})();
