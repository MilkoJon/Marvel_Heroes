import React, { useEffect, useState } from "react";
import "./CardTeam.scss";

const CardTeam = ({ hero, teamMember, deleteTeamMember, cardId }) => {
  // const hero = data.find(({ id }) => id === teamMember);
  // console.log(hero);

  const url = `${hero?.thumbnail.path}.${hero?.thumbnail.extension}`;

  if (!teamMember) {
    return null;
  }
  // console.log('render card')
  // console.log('team member'+teamMember)

  return (
    <div id="cardTeam">
       {/* col-lg-12 col-3 */}
      <div className="imgCardTeam">
        <img src={url} alt="img" />
      </div>
      <div className="someHero">
        <h5>{hero?.name}</h5>
      </div>
      <button
        onClick={() => {
          // console.log('delete teamMemder');
          deleteTeamMember(cardId);
        }}
      >
        x
      </button>
    </div>
  );
};

export default CardTeam;
