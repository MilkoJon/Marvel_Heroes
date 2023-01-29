import React from "react";
import "./CardSearch.scss";
import { numberOfTeamMembers } from "../../constants/Constants";
import { Link, useHistory } from "react-router-dom";

function CardSearch({ hero, teamMembers, setTeamMembers, setPage }) {
  // function newTeamMember(params) {
  //     console.log(newTeamMember)
  // }

//   const url = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

const history = useHistory();

  return (
    <div id="cardSearch">
      <span>{hero.name}</span>
      <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}></img>
      <div>
        {/* <Link to={`/single-hero/${hero.id}`}>
          Info
        </Link> */}
        <button onClick={()=> history.push(`/single-hero/${hero.id}`, setPage('singleHero'))}>Info2</button>
        <button
          onClick={() => {
            console.log("onClick" + teamMembers);
            if (teamMembers.length >= numberOfTeamMembers) {
              console.log("reached max team members. create modal for message");
            } else if (teamMembers.find((e) => e === hero.id)) {
              console.log("this hero is already selected in your team");
            } else {
              setTeamMembers([...teamMembers, hero.id]);
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CardSearch;
