import "./about-section-3.css";
// import browse from "../../../../Assets/Client/browse.png";
// import best from "../../../../Assets/Client/best.png"

const AboutSection3 = ({image, title, description}) => {
  return (
    <section className="aboutsection3-main-container">
      <div className="aboutsection3-left-container">
        <img
          className="aboutsection3-image"
          src={image}
          alt=""
        />
      </div>
      <div className="aboutsection3-right-container">
        <div className="aboutsection3-right-content-warp">
          <div className="aboutsection3-right-title">{title}</div>
          <div className="aboutsection3-right-content">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection3;
