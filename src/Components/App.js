import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  //state
  onSearchSubmit = async term => {
    //async function
    const response = await unsplash.get("/search/photos", {
      //vi sparar arrayen med bilder i response
      params: { query: term }
    });
    this.setState({ images: response.data.results });
    //sparar resultatet av bilderna i state
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* vi skickar ner värdet av det vi söker på i onSearchSubmit*/}
        <ImageList images={this.state.images} />
        {/*onSubmit kan kallas vad som helst. Vi skickar ner funktionen här som prop till SearchBar Komponenten */}
      </div>
    );
  }
}

export default App;
