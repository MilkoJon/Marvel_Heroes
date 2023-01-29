import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import CardSearch from "../../components/CardSearch/CardSearch";
import MyTeam from "../../components/MyTeam/MyTeam";
import "./MainPage.scss";
import { numberOfTeamMembers } from "../../constants/Constants";



function MainPage({data, teamMembers, setTeamMembers, searchString, setSearchString, deleteTeamMember, refresh, setRefresh, setPage}) {
 
//   const search = '';

  return (
    <div className="mainPage">
      {/* <div className="row"> */}
        {/* MainPage */}
        {/* <Header /> */}
        <div className="cardsDiv col-8 m-0">
          <Search
            searchString={searchString}
            setSearchString={setSearchString}
            refresh = {refresh}
            setRefresh = {setRefresh}
          />

          <div className="row">
            {data.map((e) => (
              <div key={e.id} className="col-3 p-2">
                <CardSearch
                  hero={e}
                  teamMembers={teamMembers}
                  setTeamMembers={setTeamMembers}
                  setPage={setPage}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-4 m-0">
          <MyTeam
            data={data}
            teamMembers={teamMembers}
            deleteTeamMember={deleteTeamMember}
          />
        {/* </div> */}
      </div>
    </div>
  );
}

export default MainPage;
