import React from "react";

class SearchBar extends React.Component {
  state = { term: "Search for something" };
  //every time we call state it rerenders

  //event blir callad automatiskt
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
    //vi måste använda this i klassbaserade funktioner
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          {/*måste heta det */}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              //vi sparar värdet från staten i value, detta är vad som i står sökfältet
              //vi skriver in detta i värdet för att veta vad värdet är, annars vet den bara vad värdet är när funktionen blir callad.
              //vi vill att data ska bli sparat på något sätt i "reactvärlden", bara inte i DOM
              //Ideén bakom detta är att "reactvärlden sparar och driver datan", och inte DOM ALLS.
              onChange={e => this.setState({ term: e.target.value })}
            />
            {/*inga parenthensis för att vi refererar det*, onChange heter propertien man använder om något ändras*/}
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
