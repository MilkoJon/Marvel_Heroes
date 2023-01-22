import React from "react";
import "./Search.scss";

function Search() {
  return (
    <div id="search row m-1">
        <input
        className="col-4 m-1"
          placeholder=" Search..."
          name="text"
          type="text"
          // value={searchString}
        />
        <button
        className="col-2 m-1"
          onClick={() => {
            console.log("s");
            //   funkcija on click
          }}
        >Go</button>
    </div>
  );
}

export default Search;
