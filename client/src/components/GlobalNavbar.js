import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function GlobalNavbar() {
    return (
        <Navbar bg="light" className="ml-3 w-100">
            <Navbar.Brand href="/">Google Books</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/savedbooks">Saved</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default GlobalNavbar