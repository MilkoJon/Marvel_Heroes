import React, {useState, useEffect} from "react";

// import './App.css';

import MainPage from "./pages/MainPage/MainPage";
import SingleHeroPage from "./pages/SingleHeroPage/SingleHeroPage";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/main-page");
},[]);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/main-page">
          <MainPage />
        </Route>
        <Route exact path="/single-hero-page">
          <SingleHeroPage />
        </Route>
        <Route path="*">Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
