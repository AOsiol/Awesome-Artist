import React, { Component } from "react";
import ArtistCard from "./components/ArtistCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import artists from "./artists.json";

class App extends Component {
  state = {
    artists,
    search: "",
    error: "",
  };

  removeArtist = (id) => {
    const artists = this.state.artists.filter((artist) => artist.id !== id);
    this.setState({ artists });
  };

  render() {
    return (
      <Wrapper>
        <Title>Artists</Title>
        <SearchForm></SearchForm>
        <SearchResults>
          {this.state.artists.map((artist) => (
            <ArtistCard
              removeArtist={this.removeArtist}
              id={artist.id}
              key={artist.id}
              name={artist.name}
              image={artist.image}
              media={artist.media}
              genre={artist.genre}
            />
          ))}
        </SearchResults>
      </Wrapper>
    );
  }
}

export default App;
