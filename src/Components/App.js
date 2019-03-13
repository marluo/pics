import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  //---------------------------------//
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    console.log(this);
    this.setState({ images: response.data.results });
    //sparar resultatet i state
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        {/*onSubmit kan kallas vad som helst. Vi skickar ner funktionen här till SearchBar Komponenten */}
      </div>
    );
  }
}

export default App;
