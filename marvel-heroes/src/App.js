import React, {useState, useEffect} from "react";

// import './App.css';

import MainPage from "./pages/MainPage/MainPage";
import SingleHeroPage from "./pages/SingleHeroPage/SingleHeroPage";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/");
},[]);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/single-hero">
          <SingleHeroPage />
        </Route>
        <Route path="*">Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
