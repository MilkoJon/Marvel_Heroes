import React from "react";
import "./CardSearch.scss";
import { numberOfTeamMembers } from "../../constants/Constants";

function CardSearch({ data, teamMembers, setTeamMember }) {
  // function newTeamMember(params) {
  //     console.log(newTeamMember)
  // }

  const url = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  return (
    <div id="cardSearch">
      <span>{data.name}</span>
      <img src={url}></img>
      <div>
        <button onClick>Info</button>
        {/* <button onClick={()=>setTeamMember(data.name)}>Add</button> */}
        <button
          onClick={() => {
            if (teamMembers.length < numberOfTeamMembers) {
              teamMembers.push(data.id);
              console.log(data.name);
              console.log(teamMembers);
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
