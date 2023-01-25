import React from "react";
import "./CardSearch.scss";
import { numberOfTeamMembers } from "../../constants/Constants";

function CardSearch({ hero, teamMembers, setTeamMembers, refresh, setRefresh, addTeamMember }) {
  // function newTeamMember(params) {
  //     console.log(newTeamMember)
  // }

  const url = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  return (
    <div id="cardSearch">
      <span>{hero.name}</span>
      <img src={url}></img>
      <div>
        {/* <button onClick>Info</button> */}
        {/* <button onClick={()=>setTeamMember(hero.name)}>Add</button> */}
        <button
          onClick={() => {
           
            if (teamMembers.length < numberOfTeamMembers) {
                console.log('onClick'+ teamMembers);
              setTeamMembers([...teamMembers, hero.id]);
          
            //   setRefresh(!refresh);
            } else {
                console.log('reached max team members. create modal for message')
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
