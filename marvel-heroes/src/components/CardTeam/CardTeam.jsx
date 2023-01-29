import React, { useEffect, useState } from "react";
import "./CardTeam.scss";

const CardTeam = ({ data, teamMember, deleteTeamMember, cardId }) => {

  const hero = data.find(({ id }) => id === teamMember);

  const url = `${hero?.thumbnail.path}.${hero?.thumbnail.extension}`;

  if (!teamMember) {
    return null;
  }
// console.log('render card')
// console.log('team member'+teamMember)

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
