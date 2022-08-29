import "./mission.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
// import wedding_bg from "../../../Assets/TamilMatrimony/register/wedding_bg.png";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();

  // design started here
  return (
    <section className="register_main_mission">
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

      <div className="mission_matrimony_main_container">
        <div className="mission_matrimony_title">Vision And Mission</div>
        <div className="mission_matrimony_content">
          <br />
          <br />
          "யாதும் ஊரே யாவரும் கேளிர்" என்னும் நம் பழந்தமிழ் புலவரின் கூற்றின்படி
          உலகெங்கும் பரவி வாழும் நம் தமிழ்ச்சொந்தங்களை திருமணம், வேலை,
          வியாபாரம், தொழில் மற்றும் நட்பு தொடர்பு போன்ற தகவல்களை ஒரே தளத்தில்
          பகிர்ந்து ஒன்றிணைப்பதே எங்கள் நோக்கம்
          <br />
          <br />
          We will strive to reach our goal by sharing genuine and precise
          information after due scrutiny & verification regarding Matrimony,
          employment, business, trade etc..
        </div>
      </div>
    </section>
  );
}

export default Mission;
