import { getSuggestions, debounce } from "./utils.js";

// we can add abort controller to cancel prev API call
// if suggestion list is huge, we can add intersection observer

const inputBox = document.getElementById("searchInput");
const suggestionBox = document.getElementById("suggestionWrap");

const clearSuggestions = () => {
  return (suggestionBox.innerHTML = "");
};

const appendSuggestions = (suggestions) => {
  const fragment = document.createDocumentFragment();
  suggestions.forEach((suggestion) => {
    const suggestionDiv = document.createElement("div");
    suggestionDiv.innerHTML = suggestion;
    suggestionDiv.setAttribute("data-key", suggestion);
    fragment.appendChild(suggestionDiv);
  });
  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(fragment);
};

const getSuggestionList = async (keyword) => {
  const suggestions = await getSuggestions(keyword);
  if (suggestions.length) {
    appendSuggestions(suggestions);
  }
};

const handleChange = (event) => {
  const value = event?.target?.value;
  if (value) {
    getSuggestionList(value);
  } else {
    clearSuggestions();
  }
};

const handleSelect = (event) => {
  const { key } = event.target.dataset;
  inputBox.value = key;
  clearSuggestions();
};

(() => {
  inputBox.addEventListener("input", debounce(handleChange));
  suggestionBox.addEventListener("click", handleSelect);
})();
