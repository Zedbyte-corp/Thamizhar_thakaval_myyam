import "./terms.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
// import wedding_bg from "../../../Assets/TamilMatrimony/register/wedding_bg.png";
import { useNavigate } from "react-router-dom";


function Terms() {
  const navigate = useNavigate();
  

  // design started here
  return (
    <section className="register_main">
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

      <div className="terms_matrimony_main_container">
        <div className="terms_matrimony_title">
          Terms And Conditions
        </div>
      </div>
    </section>
  );
}

export default Terms;
