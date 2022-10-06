import "./about-section-1.css"
// import browse from "../../../../Assets/Client/browse.png"


const AboutSection1 = ({image, title, description}) => {
  return (
    <section className="aboutsection1-main-container">
        <div className="aboutsection1-left-container">
            <img className="aboutsection1-image" src={image} alt="" />
        </div>
        <div className="aboutsection1-right-container">
            <div className="aboutsection1-right-title">{title}</div>
            <div className="aboutsection1-right-content">{description}</div>
        </div>
   </section>
  )
}
export default AboutSection1