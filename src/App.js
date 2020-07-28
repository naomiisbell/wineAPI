import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Names from "./components/Names";
import Picture from "./components/Picture";
import Grapes from "./components/Grapes";
import Country from "./components/Country";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/names">List of Wines</Link>
            </li>
            <li>
              <Link to="/pictures">Pictures and years</Link>
            </li>
            <li>
              <Link to="/grapes">What grapes are they made from?</Link>
            </li>
            <li>
              <Link to="/country">About the Wines</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/names">
            <Names />
          </Route>
          <Route path="/pictures">
            <Picture />
          </Route>
          <Route path="/grapes">
            <Grapes />
          </Route>
          <Route path="/country">
            <Country />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;