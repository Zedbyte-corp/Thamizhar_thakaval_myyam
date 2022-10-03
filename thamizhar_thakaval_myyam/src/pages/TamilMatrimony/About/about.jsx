import "./about.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
import wedding_bg from "../../../Assets/TamilMatrimony/register/wedding_bg.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  // design started here
  return (
    <section className="register_main_about">
      <HeaderMatrimony />
      {/* <div className="matrimony_register_image">
        <div className="matrimony_register_gradient">
          <div className="matrimony_register_quote">
            Finding a perfect match isn't a problem anymore
          </div>
        </div>
        <img
          src={wedding_bg}
          alt=""
          className="matrimony_register_wedding_bg"
        />
      </div> */}

      <div className="about_matrimony_main_container">
        <div className="about_matrimony_image_container">
          <img src="" alt="" />
        </div>
        <div className="about_matrimony_title">ABOUT US</div>
        <div className="about_matrimony_content">
        <br />
          <br />
          உலகின் பெரும்பாலான நாடுகளில் வாழும் சமூகங்களில் ஒன்று நம்முடைய தமிழ்ச்
          சமூகம். இன்றைக்கு தகவல் தொழில்நுட்பம் உலகத் தமிழர்களை விரல்நுனியில்
          ஒருங்கிணைத்து வைத்திருக்கிறது.
          <br />
          <br />
           உலகம் முழுவதும் பல்வேறு துறைகளில்
          எங்களுக்கு இருக்கும் தொடர்புகளை அடிப்படையாக வைத்து "தமிழர் தகவல்
          மையம்" என்ற தொழில்நுட்ப தளத்தை உருவாக்கி வைத்திருக்கிறோம்.
          <br />
          <br />
           " நீங்கள்
          எதிர்பார்க்கும் மணமகன் அல்லது மணமகள் பற்றிய விவரங்களை எங்களுடைம தமிழர்
          தகவல் மையம் அளிக்கும்.
          <br />
          <br />
          குவிந்து கிடக்கும் தொழில் மற்றும் வணிக
          வாய்ப்புகளை உடனுக்குடன் காட்சி படுத்துகிறோம்.
          <br />
          <br />
           பரந்துபட்ட தமிழ் கூறும்
          நல்லுலகத்தை கையடக்கத்தில் வைத்து உங்களிடம் தருகிறோம்.
           பயன்படுத்திக்
          கொள்ளுங்கள், தமிழ் உறவுகளே!
        </div>
      </div>
    </section>
  );
}

export default About;
