import React, { useState, useEffect } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Index from "../components/Index";
import List from "../components/List";

const Routes = () => {
  return (
      <>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/List" component={List} />
        <Redirect to="/" />
      </Switch>
    </>
    );
  };

  export default Routes;