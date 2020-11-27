import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
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

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

// client
//     .query({
//         query: gql`
//             query User {
//                 user(id: "2") {
//                     name
//                 }
//             }
//         `
//     })
//     .then(result => console.log(result));

// TODO Redo this into a form that connects to api/user and or oauth/token

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(input: { username: $email, password: $password }) {
            access_token
        }
    }
`;

function Login(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         login: true, // switch between Login and SignUp
    //         email: "",
    //         password: "",
    //         name: ""
    //     };

    //     // This binding is necessary to make `this` work in the callback
    //     this.loginUser = this.loginUser.bind(this);
    //     this.registerUser = this.registerUser.bind(this);
    // }

    // function loginUser() {
    //     console.log("login");
    //     const [loginMutation, { data }] = useMutation(LOGIN_MUTATION);
    // }

    const [loginMutation] = useMutation(LOGIN_MUTATION);
    const history = useHistory();

    // const _confirm = async () => {
    //     const { token } = data;
    //     this._saveUserData(token);
    //     this.props.history.push(`/home`);
    // };

    // const _saveUserData = token => {
    //     localStorage.setItem(AUTH_TOKEN, token);
    // };

    let email = "";
    let password = "";

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
                        }).then(data => {
                            // console.log(data.data.login.access_token);
                            token = data.data.login.access_token;
                            localStorage.setItem(AUTH_TOKEN, token);
                            history.push(`/home`);
                        });
                        // store access token and go to home page
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
