import {
  buttonElement,
  searchInput,
  usersInputElement,
  cardsElement,
} from "./scripts/elements.js";

import performSearch from "./scripts/performSearch.js";

buttonElement?.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, usersInputElement.checked);
});
