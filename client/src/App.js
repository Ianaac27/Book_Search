import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Jumbotron";
import Home from "./pages/Home";
import SavedBooks from "./pages/SavedBooks";
import NotFound from "./pages/NotFound";



function App() {

    return (
      <Router>
        <div>  
          <div className="row">
            <GlobalNavbar />
          </div>
          <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/savedbooks" component={SavedBooks} />
                <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
        </Router>
    );
}

export default App;
