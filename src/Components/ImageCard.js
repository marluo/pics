import React from "react";
//Vi passar in varje image en och en för att göra något i denna komponent.
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    //sätter upp statsen för spans

    this.imageRef = React.createRef();
    //Vi intisierar en ref här för access till domen på ett element, i detta fall nere i JSXn
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    //vi kör denna funktion varje gång en bild har laddats "klart" och kör funktionen setSpans
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    //vi sparar höjden av bilden i height

    const spans = Math.ceil(height / 10);
    //vi sparar detta i spans så att vi kan modifiera CSS i spans

    this.setState({ spans });
    //sparar värdet från spans i staten.
  };

  render() {
    const { description, urls } = this.props.image;
    //vi destructar detta objekt för att få en shorthand version av dessa. De betyder att dessa motsvarar
    //this.props.image.description och this.props.images.urls
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/*vi returnerar en div med rätt höjd på bilden från spans */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
        {/* eftersom att this.imageRef är i propen har vi nu access till DOMn */}
      </div>
    );
  }
}

export default ImageCard;
