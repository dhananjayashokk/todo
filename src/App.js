import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import List from "./List";
import { Redirect, Switch, Route } from "react-router-dom";



const App = () => {

  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/List" component={List} />
      <Redirect to="/" />
    </Switch>
  </>
  )
}



export default App;