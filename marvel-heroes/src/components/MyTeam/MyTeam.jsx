import React, { useEffect, useState } from 'react'
import './MyTeam.scss'
  import {numberOfTeamMembers} from '../../constants/Constants'
import CardTeam from "../../components/CardTeam/CardTeam";

function MyTeam({ data, teamMembers}) {
    
    useEffect(()=>{

    }, [{teamMembers}])

  return (
    <div className='myTeam'>
        <h3>My Team</h3>
        {[...Array(numberOfTeamMembers)].map((e, i)=> <CardTeam teamMember={teamMembers[i]} data={data}/> )}
    </div>
  )
}

export default MyTeam