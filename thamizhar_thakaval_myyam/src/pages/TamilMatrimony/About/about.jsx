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
            <AboutSection1 image={wedding_bg} title="About Us" description="Need some content" />
            <AboutSection2 image={logo} title=""
              description=" உலகின் பெரும்பாலான நாடுகளில் வாழும் சமூகங்களில் ஒன்று நம்முடைய தமிழ்ச்
          சமூகம். இன்றைக்கு தகவல் தொழில்நுட்பம் உலகத் தமிழர்களை விரல்நுனியில்
          ஒருங்கிணைத்து வைத்திருக்கிறது.

          உலகம் முழுவதும் பல்வேறு துறைகளில்
          எங்களுக்கு இருக்கும் தொடர்புகளை அடிப்படையாக வைத்து தமிழர் தகவல்
          மையம் என்ற தொழில்நுட்ப தளத்தை உருவாக்கி வைத்திருக்கிறோம்.

          நீங்கள்
          எதிர்பார்க்கும் மணமகன் அல்லது மணமகள் பற்றிய விவரங்களை எங்களுடைம தமிழர்
          தகவல் மையம் அளிக்கும்.

          குவிந்து கிடக்கும் தொழில் மற்றும் வணிக
          வாய்ப்புகளை உடனுக்குடன் காட்சி படுத்துகிறோம்.

          பரந்துபட்ட தமிழ் கூறும்
          நல்லுலகத்தை கையடக்கத்தில் வைத்து உங்களிடம் தருகிறோம்.
           பயன்படுத்திக்
          கொள்ளுங்கள், தமிழ் உறவுகளே!
         
          "/>
            {/* <AboutSection3 image="fsd" title="about us" description="sdasdasdasd"/> */}
          </>
      }
      {/* <Footer/> */}
    </div>
  )
}


export default About