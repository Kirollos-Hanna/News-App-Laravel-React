import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link, Redirect } from "react-router-dom";
import { AUTH_TOKEN } from "../constants";

// const history = useHistory();

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toHomeScreen: false
        };
    }
    render() {
        if (this.state.toHomeScreen) {
            this.setState({ toHomeScreen: false });
            return <Redirect to="/" />;
        }

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
                    {this.props.authToken && (
                        <Nav.Link>
                            <Link to="/favorites" style={{ color: "white" }}>
                                Favorites
                            </Link>
                        </Nav.Link>
                    )}
                    <Nav.Link>
                        {this.props.authToken ? (
                            <a
                                href="#"
                                onClick={() => {
                                    localStorage.removeItem(AUTH_TOKEN);
                                    this.props.handleAuthTokenChange("");
                                    this.setState({
                                        toHomeScreen: true
                                    });
                                }}
                                style={{ color: "white" }}
                            >
                                Logout
                            </a>
                        ) : (
                            <Link to="/login" style={{ color: "white" }}>
                                Login
                            </Link>
                        )}
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
