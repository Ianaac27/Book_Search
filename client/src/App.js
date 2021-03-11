import React from "react";

import "bootstrap/scss/bootstrap.scss";
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Jumbotron";
import Search from "./components/Search";


function App() {
    return (
      <div>
        <div className="row">
          <GlobalNavbar />
        </div>
        <div className="container">
          <Header />
          <Search />
        </div>
      </div>
    );
}

export default App;
