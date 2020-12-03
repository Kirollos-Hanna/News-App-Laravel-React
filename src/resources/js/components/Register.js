import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import randomString from "random-string";
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

const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
        $email: String!
        $password: String!
        $name: String!
    ) {
        register(
            input: {
                name: $name
                email: $email
                password: $password
                password_confirmation: $password
            }
        ) {
            tokens {
                access_token
            }
        }
    }
`;

function Register(props) {
    const [signupMutation] = useMutation(SIGNUP_MUTATION);
    const history = useHistory();

    let name = "";
    let email = "";
    let password = randomString({ length: 8 });

    return (
        <div className="container mt-2">
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        onChange={e => (name = e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={e => (email = e.target.value)}
                    />
                </Form.Group>

                <Button
                    className="mr-2"
                    variant="primary"
                    type="button"
                    onClick={e => {
                        e.preventDefault();
                        signupMutation({
                            variables: { email, password, name }
                        })
                            .then(data => {
                                axios
                                    .post(
                                        "http://localhost:8000/send-mail/" +
                                            password +
                                            "/" +
                                            email
                                    )
                                    .then(data => history.push(`/login`))
                                    .catch(err => console.log("Axios Error: " + err));
                            })
                            .catch(err => console.log("Sign up Error: " + err));
                    }}
                >
                    Register
                </Button>

                <Link to="/login">
                    <Button variant="primary" type="button">
                        Go to Login Page
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Register;
