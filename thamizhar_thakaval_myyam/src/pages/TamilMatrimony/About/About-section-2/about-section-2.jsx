import "./about-section-2.css"
// import browse from "../../../../Assets/Client/browse.png"


const AboutSection2 = ({image, title, description}) => {
  return (
    <section className="aboutsection2-main-container">
        <div className="aboutsection2-left-container">
            <img className="aboutsection2-image" src={image} alt="" />
        </div>
        <div className="aboutsection2-right-container">
        <div className="aboutsection2-right-content-warp">
            <div className="aboutsection2-right-title">{title}</div>
            <div className="aboutsection2-right-content">{description}</div>
        </div>
        </div>
   </section>
  )
}
export default AboutSection2