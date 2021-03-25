import React from "react";
import Home from "./pages/home";
import View from "./pages/view";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Tab } from "@material-ui/core";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/view" component={View} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
