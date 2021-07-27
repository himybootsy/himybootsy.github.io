import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Ace, Monaco } from "./components";
import { Home, Settings, Snippets, Requests } from "./components/pages";

function App() {
  if (window.location.pathname === "/Ace") {
    return(
      <Router>
        <Switch>
          <Route path="/Ace" exact component={() => <Ace />} />
        </Switch>
      </Router>
    )
  } 
  else {
    if (window.location.pathname === "/Monaco") {
      return(
        <Router>
          <Switch>
            <Route path="/Monaco" exact component={() => <Monaco />} />
          </Switch>
        </Router>
      )
    }
    else {
      return (
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/snippets" exact component={() => <Snippets />} />
              <Route path="/Settings" exact component={() => <Settings editor={'MonacoEditor'}/>} />
              <Route path="/Requests" exact component={() => <Requests />} />
            </Switch>
            <Footer />
          </Router>
        </div>
      )
    }
  }
}

export default App;
