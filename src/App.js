import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import List from "./List";
import { Router, Switch, Route,Redirect } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const App = () => {

  return (
    <Provider store={store}> 
    <div className="container mt-3">
      <Router history={history}>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/List" component={List} />
        <Redirect to="/" />
        </Switch>
        </Router>
      
    </div>
    </Provider>
  )
}



export default App;