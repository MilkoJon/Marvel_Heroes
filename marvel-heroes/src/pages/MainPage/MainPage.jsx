import React, { useEffect, useState } from "react";
import md5 from "js-md5";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import CardSearch from "../../components/CardSearch/CardSearch";
import MyTeam from "../../components/MyTeam/MyTeam";
import "./MainPage.scss";
import { numberOfTeamMembers } from "../../constants/Constants";

const PUBLIC_KEY = "833925c9737ab61ad607f48140c3adaa";
const PRIVATE_KEY = "78e2acb819aee564172eb090f195794d64742cb1";

function MainPage() {
  const [data, setData] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [refresh, setRefresh] = useState(true);

  function deleteTeamMember(i) {
    teamMembers.splice(i, 1)
    // console.log(teamMembers);
    setRefresh(!refresh);
    
    // const arr = []

    // console.log(teamMembers1);
    // teamMembers.splice(1, 1)
    // setTeamMembers([...arr, teamMembers]);

  }
  
  useEffect (() =>{
    console.log('efect=');

  }, [])

  useEffect(() => {
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.data.results));
  }, []);

//   console.log('refresh='+refresh);
//   console.log(teamMembers);
//   console.log(typeof(teamMembers))
//   console.log(data);

  return (
    <div className="mainPage container-fluid">
      <div className="row">
        MainPage
        <Header />
        <div className="cardsDiv col-8 m-0">
          <Search />

          <div className="row">
            {data.map((e) => (
              <div key={e.id} className="col-3 p-2">
                <CardSearch
                  hero={e}
                  teamMembers={teamMembers}
                  setTeamMembers={setTeamMembers}
                  refresh={refresh}
                  setRefresh={setRefresh}
                //   addTeamMember={addTeamMember}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-4 m-0">
          <MyTeam data={data} teamMembers={teamMembers} refresh={refresh} deleteTeamMember={deleteTeamMember} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
