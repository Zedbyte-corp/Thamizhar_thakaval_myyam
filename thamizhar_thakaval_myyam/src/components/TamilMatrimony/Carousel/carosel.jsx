import "./carosel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { useSelector } from "react-redux";
// import { getUserDetailsApiResponse } from "../../../networkcall.service";

const CustomCarosel = () => {
  const photo = JSON.parse(sessionStorage.getItem("photos")) 
  return (
    <Carousel emulateTouch={false} showThumbs={false} autoPlay={true} infiniteLoop={true} dynamicHeight={true} showStatus={false}>
      {
        photo === [] ? <div>Loading</div> : photo.map((image) => {
          return (
            <div className="carousel-image-controller">
              <img src={image} className="carosel-image" alt="" />
            </div>
          )
        })
      }
    </Carousel>
  );
};
export default CustomCarosel;
