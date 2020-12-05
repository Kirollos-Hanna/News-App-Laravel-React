import React, { Component } from "react";
import "../../css/Headline.css";
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

const ADD_FAVORITE_MUTATION = gql`
    mutation AddFavorite(
        $userId: Int!
        $title: String!
        $source: String!
    ){
        addFavorite(user_id: $userId, title: $title, source: $source){
            title
        }
    }
`;

const REMOVE_FAVORITE_MUTATION = gql`
    mutation RemoveFavorite(
        $id: Int!
    ){
        removeFavorite(id: $id){
            title
        }
    }
`;

const FAVORITE_QUERY = gql`
    query Favorite(
        $title: String!
    ){
        favorite(title: $title){
            id
        }
    }
`;

class Headline extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        };
    }

    render(){
        return (
            <div className="headline-container container m-1 border border-secondary rounded">
                <div className="image">
                    <img
                        className="img-fluid mw-100 mh-25"
                        src={this.props.urlToImage}
                        alt="news image"
                    />
                </div>
                <div className="headline-title">
                    {this.props.title}
                    {this.props.author ? (
                        this.props.author[0] === "<" ? (
                            <p>
                                <span>By </span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: this.props.author
                                    }}
                                ></span>
                            </p>
                        ) : (
                            <div className="author">By {this.props.author}</div>
                        )
                    ) : (
                        "By Unknown"
                    )}
                </div>
                <div className="favorite">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" 
                    onClick={e => {
                        e.preventDefault();
                        // TODO: setstate to !ischecked
                        // TODO: addtofavorites if ischecked is true
                        // TODO: removefromfavorites if ischecked is false
                    }}/>
                    <label className="form-check-label" for="defaultCheck1"> Favorite</label>
                </div>
                <div className="date">
                    Date: {this.props.publishedAt.substring(0, 10)}
                </div>
                <div className="time">
                    Time: {this.props.publishedAt.substring(11, 19)}
                </div>
                <div className="content">
                    {this.props.description ? this.props.description.substring(0, 100) : " "}
                    ...
                </div>
                <div className="source">
                    <a href={this.props.url}>Read More</a>
                </div>
            </div>
        );
    }
}

export default Headline;
