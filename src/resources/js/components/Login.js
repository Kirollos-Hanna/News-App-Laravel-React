import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Header from "./Header";
// import { setContext } from "@apollo/client/link/context";
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
    useMutation
} from "@apollo/client";

const link = createHttpLink({
    uri: "/graphql",
    credentials: "same-origin"
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(input: { username: $email, password: $password }) {
            access_token
        }
    }
`;

let email = "";
let password = "";

function Login(props) {
    const [loginMutation] = useMutation(LOGIN_MUTATION);
    const history = useHistory();

    let token = "";
    return (
        <div className="container mt-2">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={e => (email = e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={e => (password = e.target.value)}
                    />
                </Form.Group>

                <Button
                    className="mr-2"
                    variant="primary"
                    type="button"
                    onClick={e => {
                        e.preventDefault();
                        loginMutation({
                            variables: { email, password }
                        })
                            .then(data => {
                                token = data.data.login.access_token;
                                localStorage.setItem(AUTH_TOKEN, token);
                                props.handleAuthTokenChange(token);
                                history.push(`/home`);
                            })
                            .catch(err => console.log("Login Err: " + err));
                    }}
                >
                    Login
                </Button>

                <Link to="/register">
                    <Button variant="primary" type="button">
                        Create an Account
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Login;
