import { getSuggestions } from "./utils.js";
const searchInput = document.getElementById("searchInput");
const suggestionsWrap = document.getElementById("suggestion");

const fetchSuggestions = async (searchKey) => {
  const searchSuggestions = await getSuggestions(searchKey);
  if (searchSuggestions.length) {
    const fragment = document.createDocumentFragment();
    searchSuggestions.map((value) => {
      const div = document.createElement("div");
      div.innerHTML = value;
      div.setAttribute("data-key", value);
      suggestionsWrap.classList.add('suggestionVisible')
      fragment.appendChild(div);
    });
    suggestionsWrap.innerHTML = "";
    suggestionsWrap.appendChild(fragment);
  }
};

const onType = (e) => {
  const value = e.target.value;
  if (value) {
    fetchSuggestions(value);
  } else {
    suggestionsWrap.classList.remove('suggestionVisible')
  }
};

const appendResult = (e) => {
  const { key } = e.target.dataset;
  searchInput.value = key;
  suggestionsWrap.classList.remove('suggestionVisible')
};

(() => {
  searchInput.addEventListener("input", onType);
  suggestionsWrap.addEventListener("click", appendResult);
})();
