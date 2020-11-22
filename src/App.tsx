import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Privacy from "./components/Privacy/Privacy";
import Splash from "./components/Splash";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/privacy" component={Privacy}/>
      </Switch>
    </Router>
    
     
  );
}

export default App;
