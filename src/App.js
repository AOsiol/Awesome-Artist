import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import artists from "./artists.json";

class App extends Component {
  state = {
    artists,
    filteredArtists: [...artists],
    search: "",
    results: [],
    error: "",
  };

  searchArtist = (e) => {
    let artists = this.state.artists;
    let searchTerm = e.target.value;
    let filterResults = [];

    for (let i = 0; i < artists.length; i++) {
      if (
        artists[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artists[i].media.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artists[i].genre.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        filterResults.push(artists[i]);
      }
    }
    this.setState({ filteredArtists: filterResults, search: searchTerm });
  };

  removeArtist = (id) => {
    const artists = this.state.artists.filter((artist) => artist.id !== id);
    const filteredArtists = this.state.filteredArtists.filter(
      (artist) => artist.id !== id
    );
    this.setState({ artists, filteredArtists });
  };

  render() {
    return (
      <Wrapper>
        <Title>Artists</Title>

        <SearchForm
          searchArtist={this.searchArtist}
          search={this.state.search}
        />

        {this.state.filteredArtists.map((artist) => (
          <SearchResults
            removeArtist={this.removeArtist}
            id={artist.id}
            key={artist.id}
            name={artist.name}
            image={artist.image}
            media={artist.media}
            genre={artist.genre}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
