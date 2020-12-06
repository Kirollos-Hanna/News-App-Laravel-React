import React, { Component } from "react";
import axios from "axios";
import Headline from "./Headline";
import { AUTH_TOKEN } from "../constants";
import { Redirect } from "react-router-dom";
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
    useMutation,
    useQuery
} from "@apollo/client";

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        };
        this.getHeadlines = this.getHeadlines.bind(this);
    }

    getHeadlines() {
        axios
            .get(
                "https://newsapi.org/v2/top-headlines?" +
                    "country=eg&" +
                    "country=ae&" +
                    "category=sports&" +
                    "category=business&" +
                    "apiKey=83c2b2682cd54f499d6f55b85030ae56",
                {
                    transformRequest: [
                        function(data, headers) {
                            delete headers.common["X-Requested-With"];
                            return data;
                        }
                    ]
                }
            )
            .then(res => {
                this.setState({ headlines: res.data.articles });
            })
            .catch(e => {
                console.log("Error from axios request ");
                console.log(e);
            });
    }

    componentDidMount() {
        this.getHeadlines();
    }

    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN);
        if (!authToken) return <Redirect to="/login" />; // redirect to login page
        if (!this.state.headlines.length) return null;

        return (
            <div>
                <FavoritesContainer headlines={this.state.headlines}/>
            </div>
        );
    }
}


const FAVORITES_QUERY = gql`
    query Favorites{
        favorites{
            data{
                id
                title
            }
        }
    }
`;

function FavoritesContainer(props){

    const {loading, error, data, refetch} = useQuery(FAVORITES_QUERY);

    if (loading) return null;
    if (error) return `Error! ${error}`;

    const filteredHeadlines = props.headlines.filter((headline, i) => {
        return data.favorites.data.some((favorite) => headline.title === favorite.title);
    });

    return(    
        <div className="container text-center title">
            <div className="d-flex flex-wrap flex-row justify-content-center flex-row bd-highlight mb-3">
                {filteredHeadlines.map((headline, i) => {
                    return (
                        <Headline
                            key={i}
                            urlToImage={headline.urlToImage}
                            title={headline.title}
                            publishedAt={headline.publishedAt}
                            author={headline.author}
                            description={headline.description}
                            url={headline.url}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Favorites;
