import React, { useEffect, useState } from "react";
import "./CardTeam.scss";

const CardTeam = ({ data, teamMember, deleteTeamMember, cardId }) => {
  useEffect(() => {
    console.log("teamMember");
    // console.log(teamMember);
    // console.log(data);
  }, []);

  const hero = data.find(({ id }) => id === teamMember);
  //   console.log('hero')
  //   console.log(hero);

  const url = `${hero?.thumbnail.path}.${hero?.thumbnail.extension}`;

  return (
    <div id="cardTeam">
      <div className="imgCardTeam">
        <img src={url} alt="img" />
      </div>
      <div className="someHero">
        <span>{hero?.name}</span>
      </div>
      <button
        onClick={() => {
          //   teamMembers.splice(cardId,1);
          //   console.log(cardId);
          //   console.log(teamMembers);
          console.log('delete teamMemder');
          deleteTeamMember(cardId);
        }}
      >
        x
      </button>
    </div>
  );
};

export default CardTeam;
