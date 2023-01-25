import React, { useEffect, useState } from "react";
import "./MyTeam.scss";
import { numberOfTeamMembers } from "../../constants/Constants";
import CardTeam from "../../components/CardTeam/CardTeam";

const MyTeam = ({ data, teamMembers, deleteTeamMember }) => {
  useEffect(() => {
    console.log(teamMembers);
    console.log(7);
  }, [teamMembers]);

  return (
    <div className="myTeam container">
      <h3>My Team</h3>
      {/* {[...Array(numberOfTeamMembers)].map((e, i) => (
        <CardTeam
          teamMember={teamMembers[i]}
          teamMembers={teamMembers}
          data={data}
          cardId={i}
          key={i}
        />
      ))} */}
          {[...Array(numberOfTeamMembers)].map((e, i) => (
        <CardTeam
          teamMember={teamMembers[i]}
          // teamMember={(data.find(({id})=>id===teamMembers[i])).name}
          // teamMembers={teamMembers}
          data={data}
          cardId={i}
          key={i}
          deleteTeamMember={deleteTeamMember}
        />
      ))}
      {/* {teamMembers.map((e,i) => (
        <div className="col-11 p-2">
          <CardTeam
             teamMember={teamMembers[i]}
            //  teamMembers={teamMembers}
             data={data}
             cardId={i}
             key={i}
          />
        </div>
      ))} */}
    </div>
  );
};

export default MyTeam;
