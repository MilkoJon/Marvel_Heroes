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
  
  console.log(data);

  const [teamMembers, setTeamMember] = useState([]);

  return (
    <div className="mainPage container-fluid">
      <div className="row">
        MainPage
        <Header />
        <div className="cardsDiv col-8 m-0">
          <Search />

          <div className="row">
            {data.map((e) => (
              <div className="col-3 p-2">
                <CardSearch data={e} teamMembers={teamMembers} setTeamMember={setTeamMember} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-4 m-0">
          <MyTeam data={data} teamMembers={teamMembers} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
