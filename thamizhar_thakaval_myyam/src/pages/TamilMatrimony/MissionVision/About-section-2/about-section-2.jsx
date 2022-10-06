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
            <div className="aboutsection2-right-content"><br />
          <br />
          "யாதும் ஊரே யாவரும் கேளிர்" என்னும் நம் பழந்தமிழ் புலவரின் கூற்றின்படி
          உலகெங்கும் பரவி வாழும் நம் தமிழ்ச்சொந்தங்களை திருமணம், வேலை,
          வியாபாரம், தொழில் மற்றும் நட்பு தொடர்பு போன்ற தகவல்களை ஒரே தளத்தில்
          பகிர்ந்து ஒன்றிணைப்பதே எங்கள் நோக்கம்
          <br />
          <br />
          We will strive to reach our goal by sharing genuine and precise
          information after due scrutiny & verification regarding Matrimony,
          employment, business, trade etc..</div>
        </div>
        </div>
   </section>
  )
}
export default AboutSection2