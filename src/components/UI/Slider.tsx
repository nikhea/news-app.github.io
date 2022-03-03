import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {Image, ImageWarapper} from '../styles/Slider.style'

const img = {
  wordNews: require("../../img/word1.png"),
  PoliticesNews: require("../../img/political.png"),
};
const Slider: FC = () => {
  return (
    <ImageWarapper>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <Image src={img.wordNews}  />
          {/* <p className="legend">Legend 6</p> */}
        </div>
        <div>
          <Image src={img.PoliticesNews} />
          {/* <p className="legend">Legend 6</p> */}
        </div>
      </Carousel>
    </ImageWarapper>
  );
};


export default Slider;
