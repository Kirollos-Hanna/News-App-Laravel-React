import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar
            className="d-flex justify-content-between"
            bg="dark"
            variant="dark"
        >
            <Navbar.Brand href="/home">News App</Navbar.Brand>
            <Nav>
                <Nav.Link>
                    <Link to="/home" style={{ color: "white" }}>
                        Home
                    </Link>
                </Nav.Link>

                <Nav.Link>
                    <Link to="/favorites" style={{ color: "white" }}>
                        Favorites
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/login" style={{ color: "white" }}>
                        Login
                    </Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

// TODO: Remove the favorites link and only show it when
// the user is logged in

// TODO: Replace login link with logout link
// when the user is logged in

export default Header;
