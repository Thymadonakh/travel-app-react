import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            <img className="card--img" src={props.imageUrl} />
            <div className="card--info">
                <div className="info--location">
                    <h2>
                        <span className="info--country">{props.location} </span>
                        <span className="info-map"><a href={props.googleMapsUrl}>View on Google Map</a></span>
                    </h2>
                </div>
                    <div className="card--title">
                    <h1>{props.title}</h1>
                </div>
                <div className="card-date">
                    <h3>
                        <span className="date-start"> {props.startDate} - </span>
                        <span className="date-end">{props.endDate}</span>
                    </h3>
                </div>
                <div className="card-text">
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>

        </div>
    )
}