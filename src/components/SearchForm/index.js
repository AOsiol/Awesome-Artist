import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="search">
      <div className="form-group">
        <label htmlFor="artist">Search Artist:</label>
        <input
          value={props.search}
          onChange={props.searchArtist}
          name="artist"
          list="artists"
          type="text"
          className="form-control"
          placeholder="Name, Media or Genre"
          id="artist"
        />
      </div>
    </div>
  );
}

export default SearchForm;
