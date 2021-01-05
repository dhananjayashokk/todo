import React, { useState, useEffect } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Index from "../components/Index";
import List from "../components/List";
import { history } from "../helpers/history";

const Routes = () => {
  return (
      <Router history={history}>
        <div>
  
          <div className="container mt-3">
            <Switch>
              <Route exact path={"/"} component={Index} />
              <Route exact path={"/List"} component={List} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  };

  export default Routes;