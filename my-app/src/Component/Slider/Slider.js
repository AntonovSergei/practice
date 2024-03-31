function Slider({ images, active, setActive, isLoop, setIsLoop }) {
    const leftShift = () => {
      if (active === 0 && !isLoop) {
        return;
      }
      if (active < 1 && isLoop) {
        return setActive(images.length - 1);
      }
      return setActive(active - 1);
    };
  
    const rightShift = () => {
      if (active >= images.length - 1) {
        return setActive(0);
      } else {
        return setActive(active + 1);
      }
    };
  
    return (
      <div className="slider">
        <button
          disabled={!isLoop && active === 0}
          className="left-arrow"
          onClick={() => {
            leftShift();
          }}
        >
          -
        </button>
        {images.map((image, index) => (
          <>
            <button
              className={`central-circles ${active === index ? "active" : ""}`}
              key={image.id}
              onClick={() => setActive(index)}
            >
              {image.id}
            </button>
          </>
        ))}
        <button
          disabled={!isLoop && active === images.length - 1}
          className="right-arrow"
          onClick={() => {
            rightShift();
          }}
        >
          +
        </button>{" "}
        <p>
          {active + 1} / {images.length}
        </p>
        <div>
          <button
            className={isLoop ? "active" : ""}
            onClick={() => setIsLoop(!isLoop)}
          >
            Round
          </button>
        </div>
      </div>
    );
  }
  
  export default Slider;
  