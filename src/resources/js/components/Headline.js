import React from "react";
import "../../css/Headline.css";

function Headline(props) {
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
            <div className="favorite">
                <p>favorite</p>
            </div>
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

export default Headline;
