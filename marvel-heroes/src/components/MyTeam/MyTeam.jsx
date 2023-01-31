import React, { useEffect, useState } from "react";
import "./MyTeam.scss";
import { numberOfTeamMembers } from "../../constants/Constants";
import CardTeam from "../../components/CardTeam/CardTeam";

const MyTeam = ({ data, teamData, teamMembers, deleteTeamMember }) => {
  useEffect(() => {
    // console.log(teamMembers);
    // console.log(7);
  }, [teamMembers]);

  return (
    <div className="myTeam row">
      <h3>My Team</h3>
 
          {[...Array(numberOfTeamMembers)].map((e, i) => (
        <CardTeam
          teamMember={teamMembers[i]}
          // teamMember={(data.find(({id})=>id===teamMembers[i])).name}
          // teamMembers={teamMembers}
          // data={data}
          hero={teamData[i]}
          cardId={i}
          key={i}
          deleteTeamMember={deleteTeamMember}
        />
      ))}

    </div>
  );
};

export default MyTeam;
