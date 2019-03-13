import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  //har nu access till propen, i detta fall en array av bilderna.
  const images = props.images.map(image => {
    //destructering, betyder samma sak som image.id, image.description, image.urls.regular
    return <ImageCard key={image.id} image={image} />;
    //vi passar varje en och en image från map array in till komponenten ImageCard så att vi kan göra något med varje "index"
  });
  console.log("images", images);
  return <div className="image-list">{images}</div>;
};

export default ImageList;
