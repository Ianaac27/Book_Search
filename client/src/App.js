import React from "react";

import "bootstrap/scss/bootstrap.scss";
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Jumbotron";
import Home from "./components/Home";
import SavedBooks from "./components/SavedBooks";


function App() {
    return (
      <div>
        <div className="row">
          <GlobalNavbar />
        </div>
        <div className="container">
          <Header />
          {/* Establish Router */}
          <Home />
          {/* <SavedBooks /> */}
        </div>
      </div>
    );
}

export default App;
