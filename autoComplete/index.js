import { getSuggestions, debounce } from "./utils.js";

const inputBox = document.getElementById("searchInput");
const suggestionBox = document.getElementById("suggestionWrapper");

const resetState = () => {
  suggestionBox.classList.remove("suggestionVisible");
};

const renderDropdownItems = (list) => {
  const suggFrag = document.createDocumentFragment();
  list.forEach((suggestion) => {
    const el = document.createElement("div");
    el.innerHTML = suggestion;
    el.classList.add("dropdown");
    el.setAttribute("data-key", suggestion);
    suggFrag.appendChild(el);
  });
  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(suggFrag);
};

const handleSearch = async (keyword) => {
  const suggestions = await getSuggestions(keyword);
  console.log("suggestions", suggestions);

  if (suggestions.length) {
    suggestionBox.classList.add("suggestionVisible");
    renderDropdownItems(suggestions);
  }
};

const handleInputChange = (e) => {
  const value = e.target.value;
  if (value) {
    handleSearch(value);
  } else {
    resetState();
  }
};

const handleSelect = (event) => {
  const { key } = event.target.dataset;
  if (key) {
    inputBox.value = key;
    resetState();
  }
};

(() => {
  inputBox.addEventListener("input", debounce(handleInputChange));
  suggestionBox.addEventListener("click", handleSelect);
})();
