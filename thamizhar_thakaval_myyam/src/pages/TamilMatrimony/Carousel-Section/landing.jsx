import "./landing.css"
// import homeJSON from "./homeAPI.json"
// import { useSearchParams } from "react-router-dom";
import CustomCarosel from "../../../components/TamilMatrimony/Carousel/carosel";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";


const Landing = () => {
  
  return (    
    <section className="matrimony_details_main_container">
            <HeaderMatrimony />
      <section className="landing-main-container-warp">
        <div className="landing-carousel-container">
            <CustomCarosel/>    
        </div>
      </section>
    </section>  

  );
};
export default Landing;
