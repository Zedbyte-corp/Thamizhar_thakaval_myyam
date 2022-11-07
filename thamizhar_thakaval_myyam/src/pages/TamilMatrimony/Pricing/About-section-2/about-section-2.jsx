import "./about-section-2.css"
// import browse from "../../../../Assets/Client/browse.png"


const AboutSection2 = ({ image, title, description }) => {
  return (
    <section className="aboutsection2-main-container">
      <div className="aboutsection2-left-container">
        <img className="aboutsection2-image" src={image} alt="" />
      </div>
      <div className="aboutsection2-right-container">
        <div className="aboutsection2-right-content-warp">
          <div className="aboutsection2-right-title">{title}</div>
          <div className="aboutsection2-right-content">
            As an initial offer TTM provides free registration for both Female & Male Members. For Female Members registration is free for first 6 months and it is 3 months for Male Members. However, a small charge will be levied while downloading the complete details of a suitable Profile as given below. The tariff of TTM is given below for the first year.
            <br/>
            In addition to this, TTM also provides the members with horoscope match services (with the support of third party vendors) and background verification services (third party vendor) in order to choose your right matches. You can get the help of some renowned horoscope experts online to check the match of the selected profiles. Also we can support you with the discreet background verification of the candidates which may help you to decide & ensure on their family reputation and employment and education details.
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection2