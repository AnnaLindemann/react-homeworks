import cat from "../assets/images/cat.jpg";

function ImageComponent({ src = cat, alt = "Image", width = 320 }) {
  return <img src={src} alt={alt} wigth={width} />;
}

export default ImageComponent;
