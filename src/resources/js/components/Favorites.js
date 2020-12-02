import React, { Component } from "react";
import axios from "axios";
import Headline from "./Headline";
import { AUTH_TOKEN } from "../constants";
import { Redirect } from "react-router-dom";

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
                console.log(res);
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
                <div className="container text-center title">
                    <div className="d-flex flex-wrap flex-row justify-content-center flex-row bd-highlight mb-3">
                        {this.state.headlines.map((headline, i) => {
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
            </div>
        );
    }
}

export default Favorites;
