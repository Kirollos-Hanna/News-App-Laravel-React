import React, { Component, useState } from "react";
import "../../css/Headline.css";
import { setContext } from "@apollo/client/link/context";
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
    useMutation,
    useQuery
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

const ADD_FAVORITE_MUTATION = gql`
    mutation AddFavorite(
        $userId: Int!
        $title: String!
        $source: String!
    ){
        addFavorite(user_id: $userId, title: $title, source: $source){
            id
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

function Headline(props) {
    const title = props.title;
    const {loading, error, data, refetch} = useQuery(FAVORITE_QUERY, {
        variables: { title },
      });

    if (loading) return null;
    if(error) return `Error! ${error}`;

    return (
        <div className="headline-container container m-1 border border-secondary rounded">
                <div className="image">
                    <img
                        className="img-fluid mw-100 mh-25"
                        src={props.urlToImage}
                        alt="news image"
                    />
                </div>
                <div className="headline-title">
                    {props.title}
                    {props.author ? (
                        props.author[0] === "<" ? (
                            <p>
                                <span>By </span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: props.author
                                    }}
                                ></span>
                            </p>
                        ) : (
                            <div className="author">By {props.author}</div>
                        )
                    ) : (
                        "By Unknown"
                    )}
                </div>
                <Checkbox title={props.title} source={props.url} userID={props.userID} favoriteId={data.favorite? data.favorite.id : null} checked={data.favorite? true : false}/>
                <div className="date">
                    Date: {props.publishedAt.substring(0, 10)}
                </div>
                <div className="time">
                    Time: {props.publishedAt.substring(11, 19)}
                </div>
                <div className="content">
                    {props.description ? props.description.substring(0, 100) : " "}
                    ...
                </div>
                <div className="source">
                    <a href={props.url}>Read More</a>
                </div>
            </div>
    );
}

let favoriteId;
function Checkbox(props){
    const userId = props.userID;
    const source = props.source;
    const title = props.title;
    const [checked, setChecked] = useState(props.checked);
    const [addFavoriteMutation] = useMutation(ADD_FAVORITE_MUTATION);
    const [removeFavoriteMutation] = useMutation(REMOVE_FAVORITE_MUTATION);

    // const [getFavorite, {loading, favoriteData}] = useLazyQuery(FAVORITE_QUERY);

    // if (data){
    //     console.log("This is getting called");
    //     setChecked(true);
    // }

    // if (loading) return null;

    const onChange = event => {
        event.persist();
        setChecked(event.target.checked);
        if(!checked){
            console.log("User id" + userId);
            addFavoriteMutation({
                variables: { userId, title, source }
            }).then(data => {
                console.log("Added Successfully");
                favoriteId = data.data.addFavorite.id;
            })
            .catch(e => console.log("Adding to Favorites Error: " + e));
        } else{
            console.log("Removing");
            // console.log(data);
            removeFavoriteMutation({
                variables: {id: props.favoriteId}
            }).then(data => {
                console.log("Deleted Successfully");
            })
            .catch(e => console.log("Remove from Favorites Error: " + e));
        }
    };

    return (
        <div className="favorite">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={checked}
            onChange={onChange}/>
            <label className="form-check-label" for="defaultCheck1"> Favorite</label>
        </div>
    );
}

export default Headline;