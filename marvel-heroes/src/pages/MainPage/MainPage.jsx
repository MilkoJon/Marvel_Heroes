import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import CardSearch from "../../components/CardSearch/CardSearch";
import MyTeam from "../../components/MyTeam/MyTeam";
import "./MainPage.scss";
import { numberOfTeamMembers } from "../../constants/Constants";

function MainPage({
  data,
  teamMembers,
  setTeamMembers,
  teamData,
  setTeamData,
  search,
  setSearch,
  deleteTeamMember,
  refresh,
  setRefresh,
  setPage,
}) {
// const [teamName, setTeamName] = useState('My Team');
  return (
    <div className="mainPage row p-0">
      <div className="cardsDiv col-xxl-9 col-xl-9 col-lg-8 m-0">
            <Search
            search={search}
            setSearch={setSearch}
            refresh={refresh}
            setRefresh={setRefresh}
            />

            <div className="cardsDiv row">
            {data.map((e) => (
                <div
                key={e.id}
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6 p-2"
                >
                <CardSearch
                    hero={e}
                    teamMembers={teamMembers}
                    setTeamMembers={setTeamMembers}
                    teamData={teamData}
                    setTeamData={setTeamData}
                    setPage={setPage}
                />
                </div>
            ))}
            </div>
      </div>
      <div className="myTeamDiv col-xxl-3 col-xl-3 col-lg-4 m-0 p-0">
        <MyTeam
          data={data}
          teamData={teamData}
          teamMembers={teamMembers}
          deleteTeamMember={deleteTeamMember}
        />
      </div>
    </div>
  );
}

export default MainPage;
