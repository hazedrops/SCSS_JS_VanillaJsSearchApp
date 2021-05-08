'use strict';

import { clearSearchText, setSearchFocus, showClearTextButton, clearPushListener } from "./searchBar.js";
import { deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine } from "./searchResults.js";
import { getSearchTerm } from "./dataFunctions.js";
import { retrieveSearchResults } from "./dataFunctions.js";
import { pagination } from "./resultPagination.js";

document.addEventListener("readystatechange", (event) => {
  if(event.target.readyState === 'complete') {
    initApp();
    console.log(event.target.readyState)
  }
});

const initApp = () => {
  // Set the focus
  setSearchFocus();

  // 3 listeners clear text
  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);

  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);
  clear.addEventListener("keydown", clearPushListener);

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
}

// Procedural "workflow" function 
const submitTheSearch = (event) => {
  event.preventDefault();
  
  // Delete search results
  deleteSearchResults();

  // Process the search
  // processTheSearch();

  // Set the focus
  // setSearchFocus();
};

// Procedural
// const processTheSearch = async () => {
//   // Clear the stats line
//   clearStatsLine();

//   const searchTerm = getSearchTerm();
  
//   if (searchTerm === "") return;

//   const resultArray = await retrieveSearchResults(searchTerm);

//   // If there are any results, build search results
//   if(resultArray.length) buildSearchResults(resultArray);

//   if(resultArray.length > 10) pagination(resultArray);
  
//   // Set stats line
//   setStatsLine(resultArray.length);
// };