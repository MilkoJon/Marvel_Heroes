import React, { useEffect, useState } from "react";
import "./CardTeam.scss";

const CardTeam = ({ data, teamMember, teamMembers, cardId }) => {
  useEffect(() => {
    // console.log('teamMember');
    // console.log(teamMember)
  }, [{ teamMembers, teamMember }]);

  return (
    <div id="cardTeam">
      <div className="imgCardTeam">slika</div>
      <div className="someHero">
        <span>{teamMember}</span>
        {/* <span>{data.find(({id}) => id === teamMember).name}</span> */}
        {/* const result = inventory.find(({ name }) => name === "cherries"); */}
      </div>
      <button
        onClick={() => {
          teamMembers.splice(cardId,1);
          console.log(cardId);
          console.log(teamMembers);
        }}
      >
        x
      </button>
    </div>
  );
};

export default CardTeam;
