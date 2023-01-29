import React, { useState, useEffect } from "react";

// import './App.css';

import MainPage from "./pages/MainPage/MainPage";
import SingleHeroPage from "./pages/SingleHeroPage/SingleHeroPage";
import { Switch, Route, useHistory } from "react-router-dom";
import { DataProvider } from "./context";
import md5 from "js-md5";
import Header from "./components/Header/Header";

const PUBLIC_KEY = "833925c9737ab61ad607f48140c3adaa";
const PRIVATE_KEY = "78e2acb819aee564172eb090f195794d64742cb1";

function App() {
  const [data, setData] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [page, setPage] = useState('main')

  const history = useHistory();

  console.log("search=" + searchString);
  const search = "";

  function deleteTeamMember(i) {
    teamMembers.splice(i, 1);
    setTeamMembers([...teamMembers]);
  }

  useEffect(() => {
    history.push("/");

    const teamMembers = JSON.parse(localStorage.getItem("teamMembers"));
    if (teamMembers) {
      setTeamMembers(teamMembers);
    }
  }, []);

  useEffect(() => {
    console.log("local storage=");
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  useEffect(() => {
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&${search}limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.data.results));
  }, [refresh]);

  return (
    <DataProvider value={{ data }}>
                       {/* ^^^ Doble {{}} !!! */}
      <div className="app container-fluid">
        <div className="row">
          <Header page = {page} setPage={setPage}/>
          <Switch>
            <Route exact path="/">
              <MainPage
                data={data}
                teamMembers={teamMembers}
                setTeamMembers={setTeamMembers}
                searchString={searchString}
                setSearchString={setSearchString}
                deleteTeamMember={deleteTeamMember}
                refresh={refresh}
                setRefresh={setRefresh}
                setPage={setPage}
              />
            </Route>
            <Route path="/single-hero/:heroId">
              <SingleHeroPage
                PUBLIC_KEY={PUBLIC_KEY}
                PRIVATE_KEY={PRIVATE_KEY}
              />
            </Route>
            <Route path="*">Page Not Found</Route>
          </Switch>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
