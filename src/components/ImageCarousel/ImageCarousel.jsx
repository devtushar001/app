const ImageCarousel = ({ images }) => {
  return (
    <div className="slider">
      <div className="slides">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="navigation">
        {images.map((_, index) => (
          <a href={`#slide-${index + 1}`} key={index} className="nav-dot"></a>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
