import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "../components/Login";
import Header from "../components/Header";
import Register from "../components/Register";
import Home from "../components/Home";
import Favorites from "../components/Favorites";
import Forgot from "../components/Forgot";
import Reset from "../components/Reset";
import { setContext } from "@apollo/client/link/context";
import { AUTH_TOKEN } from "../constants";

import "bootstrap/dist/css/bootstrap.min.css";
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    gql
} from "@apollo/client";

// const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = localStorage.getItem(AUTH_TOKEN);
//     // return the headers to the context so httpLink can read them
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : ""
//         }
//     };
// });

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    credentials: "same-origin",
    cache: new InMemoryCache()
});

// client
//     .query({
//         query: gql`
//             query User {
//                 user(id: "1") {
//                     name
//                 }
//             }
//         `
//     })
//     .then(result => console.log(result));

// const token = localStorage.getItem(AUTH_TOKEN);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authToken: localStorage.getItem(AUTH_TOKEN)
        };
        this.handleAuthTokenChange = this.handleAuthTokenChange.bind(this);
    }

    handleAuthTokenChange(token) {
        this.setState({ authToken: token });
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Header
                        authToken={this.state.authToken}
                        handleAuthTokenChange={this.handleAuthTokenChange}
                    />
                    <Switch>
                        <Route exact path="/" render={() => <h1>Welcome</h1>} />
                        <Route
                            path="/login"
                            render={() => (
                                <Login
                                    handleAuthTokenChange={
                                        this.handleAuthTokenChange
                                    }
                                />
                            )}
                        />
                        <Route path="/register" component={Register} />
                        <Route path="/home" component={Home} />
                        <Route path="/favorites" component={Favorites} />
                        <Route path="/forgotpassword" component={Forgot} />
                        <Route
                            path="/password/reset/:token"
                            component={Reset}
                        />
                    </Switch>
                </BrowserRouter>
            </ApolloProvider>
        );
    }
}

export default App;
