import "./about.css"
// import Header from "../../../Components/Client/header/header"
import AboutSection1 from "./About-section-1/about-section-1"
import AboutSection2 from "./About-section-2/about-section-2"
import AboutSection3 from "./About-section-3/about-section-3"
// import Footer from "../../../Components/Client/footer/footer";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
import { useSelector } from "react-redux"
import { useEffect } from 'react';
import wedding_bg from "../../../Assets/TamilMatrimony/register/wedding_bg.png";
import logo from "../../../Assets/Login/ttmlogo.png"

const About = () => {
  const image = "https://thumbs.dreamstime.com/b/indian-wedding-closeup-shot-ceremony-74168941.jpg"
  const about = useSelector((state) => state.about)
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="about-main-container">
      <HeaderMatrimony />
      {
        about === null ? <div> LOADING </div> :
          <>
            <AboutSection1 image={image} title="Pricing" description="Need some content" />
            <AboutSection2 image={logo} title=""/>
            <AboutSection3 image="fsd" title="TARIFF" description=""/>
          </>
      }
      {/* <Footer/> */}
    </div>
  )
}


export default About