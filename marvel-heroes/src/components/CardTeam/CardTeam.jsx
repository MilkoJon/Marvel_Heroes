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
    <div className="col-3 col-lg-12 p-1 p-sm-1">
      <div id="cardTeam">
        {/* col-lg-12 col-3 */}
        <div className="imgCardTeam">
          <img src={url} alt="img" />
        </div>
        <div className="someHero">
          <h5 className="name">{hero?.name}</h5>
        </div>
        <button
          onClick={() => {
            // console.log('delete teamMemder');
            deleteTeamMember(cardId);
          }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


        </button>
      </div>
    </div>
  );
};

export default CardTeam;
