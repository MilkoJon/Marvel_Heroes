import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.scss";

function Header({ page, setPage }) {

  const history = useHistory();

  return (
    <h1 className="header col-12 p-1">
      {page === "main" && "Select Your Marvel Hero Team"}
      {page === "singleHero" && "Single Hero "}
      {page === "singleHero" &&
      <button
        onClick={() =>{
          history.push(`/`, setPage("main"))
        }
      }
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>

      </button>
      }
    </h1>
  );
}

export default Header;
