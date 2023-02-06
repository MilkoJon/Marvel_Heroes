import React, { useEffect, useState } from "react";
import "./MyTeam.scss";
import { numberOfTeamMembers } from "../../constants/Constants";
import CardTeam from "../../components/CardTeam/CardTeam";

const MyTeam = ({ data, teamData, teamMembers, deleteTeamMember }) => {
  const [teamName, setTeamName] = useState('My Team')
  useEffect(() => {
    // console.log(teamMembers);
    // console.log(7);
  }, [teamMembers]);

  return (
    <div className="myTeam row">
      <h3>{teamName}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
 
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
