import React from "react";
import Carousel from "react-multi-carousel";
import "./WithScrollbar.css";
import img1 from "../../assets/img/Lego/img1.webp"
import img2 from "../../assets/img/Lego/img2.webp"
import img3 from "../../assets/img/Lego/img3.webp"
import img4 from "../../assets/img/Lego/img4.webp"
import img5 from "../../assets/img/Lego/img5.webp"
import img6 from "../../assets/img/Lego/img6.webp"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class WithScrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider absolute -bottom-[4px]">
          <input
          id="rangeok"
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input "
          />
        </div>
      );
    };
    return (
      <>
      <Carousel
        ssr={false}
        ref={el => (this.Carousel = el)}
        partialVisbile={false}
        customButtonGroup={<CustomSlider />}
        itemClassName="slider-image-item"
        responsive={responsive}
        containerClassName="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={nextSlide => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: 150 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
        className="h-[400px]"
      >
        <div className="image-container increase-size mt-5">
          <img
            draggable={false}
            style={{ cursor: "pointer" }}
            src={img1}
          />
        </div>
        <div className="increase-size mt-5">
          <img
            draggable={false}
            style={{ cursor: "pointer" }}
            src={img2}
          />
        </div>

        <div className="image-container increase-size mt-5">
          <img
            draggable={false}
            style={{ cursor: "pointer" }}
            src={img3}
          />
        </div>

        <div className="image-container increase-size mt-5">
          <img
            draggable={false}
            style={{ cursor: "pointer" }}
            src={img4}
          />
        </div>

        <div className="image-container increase-size mt-5">
          <img
            draggable={false}
            style={{ cursor: "pointer" }}
            src={img5}
          />
        </div>
        <div className="image-container increase-size mt-3">
          <img
            draggable={false}
            style={{ cursor: "pointer" }}
            src={img6}
          />
        </div>
      </Carousel>
      </>

    );
  }
}

export default WithScrollbar;
