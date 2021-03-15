import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import ReactNotification from 'react-notifications-component';
// import { store } from 'react-notification-component';
// import "animate.css-react";
import 'react-notifications-component/dist/theme.css'

import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Jumbotron";
import Home from "./pages/Home";
import SavedBooks from "./pages/SavedBooks";
import NotFound from "./pages/NotFound";



function App() {

    return (
      <Router>
        <div>
          <ReactNotification isMobile={true} breakpoint={768} />  
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
