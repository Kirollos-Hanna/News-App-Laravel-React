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
    useQuery,
    useLazyQuery,
    NetworkStatus
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

class Headline extends Component {
    constructor(props){
        super(props);
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
                <Checkbox title={this.props.title} source={this.props.url} userID={this.props.userID}/>
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

let favoriteId;
function Checkbox(props){
    const userId = props.userID;
    const source = props.source;
    const title = props.title;
    const {loading, error, data, refetch} = useQuery(FAVORITE_QUERY, {
        variables: { title },
      });
    const [checked, setChecked] = useState(false);
    const [addFavoriteMutation] = useMutation(ADD_FAVORITE_MUTATION);
    const [removeFavoriteMutation] = useMutation(REMOVE_FAVORITE_MUTATION);
    
    // const [getFavorite, {loading, favoriteData}] = useLazyQuery(FAVORITE_QUERY);

    if (loading) return null;

    const onChange = event => {
        event.persist();
        setChecked(event.target.checked);
        if(!checked){
            console.log("User id" + userId);
            addFavoriteMutation({
                variables: { userId, title, source }
            }).then(data => {
                console.log("Added Successfully");
                console.log(data.data.addFavorite.id);
                favoriteId = data.data.addFavorite.id;
            })
            .catch(e => console.log("Adding to Favorites Error: " + e));
        } else{
            console.log(favoriteId);
            refetch();
            // while(NetworkStatus.refetch){
            //     console.log("wait");
            // }
            console.log(data);
            // console.log(data);
            // removeFavoriteMutation({
            //     variables: {id: favoriteId}
            // }).then(data => {
            //     console.log("Deleted Successfully");
            // })
            // .catch(e => console.log("Remove from Favorites Error: " + e));
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