import React from "react";

import "bootstrap/scss/bootstrap.scss";
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Jumbotron";


function App() {
    return (
      <div>
        <div className="row">
          <GlobalNavbar />
        </div>
        <div className="container">
          <Header />
        </div>
      </div>
    );
}

export default App;
