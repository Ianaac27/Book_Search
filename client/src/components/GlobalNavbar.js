import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function GlobalNavbar() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/saved">Saved</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default GlobalNavbar