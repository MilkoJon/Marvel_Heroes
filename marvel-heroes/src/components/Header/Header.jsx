import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.scss";

function Header({ page, setPage }) {

  const history = useHistory();

  return (
    <h1 className="header col-12 m-0 p-1">
      {page === "main" && "Select Your Marvel Hero Team"}
      {page === "singleHero" && "Single Hero "}
      {page === "singleHero" &&
      <button
        onClick={() =>{
          history.push(`/`, setPage("main"))
        }
      }
      >
        Back
      </button>
      }
    </h1>
  );
}

export default Header;
