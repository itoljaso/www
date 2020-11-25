import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import JoinMe from "./components/JoinMe/JoinMe";
import Privacy from "./components/Privacy/Privacy";
import Splash from "./components/Splash";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/privacy" component={Privacy}/>
      <Route path="/joinme/:userGuid" component={JoinMe}/>
      </Switch>
    </Router>
    
     
  );
}

export default App;
