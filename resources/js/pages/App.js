import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "../components/Login";
import Header from "../components/Header";
import Register from "../components/Register";
import Home from "../components/Home";
import Forgot from "../components/Forgot";
import Reset from "../components/Reset";
import { setContext } from "@apollo/client/link/context";

import "bootstrap/dist/css/bootstrap.min.css";
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    gql
} from "@apollo/client";

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
    uri: "http://localhost:8000/graphql",
    credentials: "same-origin",
    cache: new InMemoryCache()
});

client
    .query({
        query: gql`
            query User {
                user(id: "1") {
                    name
                }
            }
        `
    })
    .then(result => console.log(result));

//This is example code, delete later
// const client = new ApolloClient({
//     uri: httpLink,
//     cache: new InMemoryCache(),
//     onError: ({ graphQLErrors, networkError, operation, forward }) => {
//         if (networkError) {
//             console.log(networkError);
//         }
//         if (graphQLErrors) {
//             for (let err of graphQLErrors) {
//                 // handle errors differently based on its error code
//                 switch (err.extensions.code) {
//                     case "UNAUTHENTICATED":
//                         // old token has expired throwing AuthenticationError,
//                         // one way to handle is to obtain a new token and
//                         // add it to the operation context
//                         const headers = operation.getContext().headers;
//                         operation.setContext({
//                             headers: {
//                                 ...headers,
//                                 authorization: getNewToken()
//                             }
//                         });
//                         // Now, pass the modified operation to the next link
//                         // in the chain. This effectively intercepts the old
//                         // failed request, and retries it with a new token
//                         return forward(operation);

//                     // handle other errors
//                     case "ANOTHER_ERROR_CODE":
//                     // ...
//                 }
//             }
//         }
//     }
// });

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" render={() => <h1>Welcome</h1>} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/home" component={Home} />
                    <Route path="/forgotpassword" component={Forgot} />
                    <Route path="/password/reset/:token" component={Reset} />
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
