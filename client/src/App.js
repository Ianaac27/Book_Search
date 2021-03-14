import React from "react";
// import {Router, Switch, Route} from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Jumbotron";
import Home from "./components/Home";
import SavedBooks from "./components/SavedBooks";


function App() {

    return (
      // <Router>
        <div>
          <div className="row">
            <GlobalNavbar />
          </div>
          <div className="container">
            <Header />
            <Home />
            {/* <Switch>
                <Route path="/home" component={Home} />
                <Route path="/savedbooks" component={SavedBooks} />
            </Switch> */}
          </div>
        </div>
      // </Router>
    );
}

export default App;
