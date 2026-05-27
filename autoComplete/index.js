import { getSuggestion, debounce } from "./utils.js";

const searchInput = document.getElementById("searchInput");
const suggestionWrap = document.getElementById("suggestionWrap");

const clearSuggestion = () => {
  suggestionWrap.classList.remove("suggestion-visible");
  suggestionWrap.innerHTML = "";
};

const listSuggestions = async (value) => {
  const suggestions = await getSuggestion(value);
  if (suggestions.length) {
    const fragment = document.createDocumentFragment();
    suggestions.forEach((suggestion) => {
      const div = document.createElement("div");
      div.innerHTML = suggestion;
      div.setAttribute("data-key", suggestion);
      suggestionWrap.classList.add("suggestion-visible");
      fragment.appendChild(div);
    });
    suggestionWrap.innerHTML = "";
    suggestionWrap.appendChild(fragment);
  }
};

const handleSearch = (e) => {
  let { value } = e.target;
  if (value.trim()) {
    listSuggestions(value);
  } else {
    clearSuggestion();
  }
};

const appendSuggestion = (e) => {
  const { key } = e.target.dataset;
  searchInput.value = key;
  clearSuggestion();
};

(() => {
  searchInput.addEventListener("input", debounce(handleSearch));
  suggestionWrap.addEventListener("click", appendSuggestion);
})();
