import React from "react";
import "./Search.scss";

// let search = document.querySelector("input");
// search.addEventListener("keyup", () => {
//   let x = search.value;
//   console.log(x)
// })



const Search = ({searchString, setSearchString, refresh, setRefresh}) => {
  return (
    <div id="search row m-1">
        <input
        className="col-4 m-1"
          placeholder=" Search..."
          name="text"
          type="text"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
            // console.log('goSearch');
          }}
        />
        <button
        className="col-2 m-1"
          onClick={() => {
            console.log("goSearch");
            setRefresh(!refresh)
            //   funkcija on click
          }}
        >Go</button>
    </div>
  );
}

export default Search;
