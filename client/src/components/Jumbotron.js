import React from "react";
import { Jumbotron } from "react-bootstrap";

function Header() {
    return (
            <Jumbotron className="mt-4">
                <h1 className="text-center">Google Books Search</h1>
                <p className="mt-3 text-center">Search for and Save Books of Interest</p>
            </Jumbotron>
    )
}

export default Header