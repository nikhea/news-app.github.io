import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}

interface Carousel {
  showArrows?: boolean;
  onChange?: any;
  onClickItem?: any;
  onClickThumb?: any;
}
declare module "react-responsive-carousel" {
  // const noTypesYet: any;
  // export default noTypesYet;
  // export default Carousel;
}
