import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

function GlobalNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/savedbooks">Saved</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default GlobalNavbar