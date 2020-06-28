import React from "react";
import "./style.css";

function ArtistCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Media:</strong> {props.media}
          </li>
          <li>
            <strong>Genre:</strong> {props.genre}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeArtist(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default ArtistCard;
