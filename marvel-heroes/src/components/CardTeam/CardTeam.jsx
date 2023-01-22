import React, { useEffect, useState } from 'react'
import "./CardTeam.scss"

function CardTeam({data, teamMember}) {

    // useEffect(()=>{

    // }, [{teamMember}])

    return (
        <div id="cardTeam">
            <div className="imgCardTeam">
                slika
            </div>
            <div className="someHero">
            <span>{teamMember}</span>
            {/* <span>{data.find(({id}) => id === teamMember).name}</span> */}
            {/* const result = inventory.find(({ name }) => name === "cherries"); */}
            </div>
        </div>
    )
}

export default CardTeam
