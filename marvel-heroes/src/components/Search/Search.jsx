import React from "react";
import "./Search.scss";

// let search = document.querySelector("input");
// search.addEventListener("keyup", () => {
//   let x = search.value;
//   console.log(x)
// })



const Search = ({search, setSearch, refresh, setRefresh}) => {
  return (
    <div className="search row">
        <input
        className="col-9 col-sm-4 col-md-4 col-lg-4 col-xl-3 m-1"
          placeholder=" Search..."
          name="text"
          type="text"
          // value={searchString}
          onChange={(e) => {
            setSearch(`&nameStartsWith=${e.target.value}`);
            // console.log('goSearch');
          }}
        />
        <button
        className="searchBtn col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 m-1"
          onClick={() => {
            console.log("goSearch");
            setSearch(search);
            setRefresh(!refresh);
            //   funkcija on click
          }}
        >Go</button>
    </div>
  );
}

export default Search;
