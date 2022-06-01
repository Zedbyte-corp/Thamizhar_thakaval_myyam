import "./header.matrimony.css";
import logo from "../../../Assets/Login/logo.png";
import profile from "../../../Assets/TamilMatrimony/home/profile_icon.png";
import { useNavigate } from "react-router-dom";


function HeaderMatrimony() {
  const navigate = useNavigate();


  function onClickprofile() {
    console.log("profile clicked");
  }

  function onClickHome() {
    console.log("profile clicked");
    navigate("/Matrimony/home");
  }

  function routeToViewProfile() {
    console.log("routeToViewProfile clicked");
    navigate("/Matrimony/details", { state: { id: sessionStorage.getItem("user_id") } });
  }

  function routeToAbout() {
    console.log("routeToAbout clicked");
    navigate("/Matrimony/about");
  }

  function routeToTermsAndConditions() {
    console.log("routeToTermsAndConditions clicked");
    navigate("/Matrimony/terms");
  }

  
  // design started here
  return (
    <div className="matrimony_header_main">
      <div className="matrimony_header_logo">
        <img onClick={onClickHome} className="logo_image_matrimony" src={logo} alt="" />
      </div>
      <div class="dropdown">
        <img
          onClick={onClickprofile}
          className="logo_image_matrimony dropbtn"
          src={profile}
          alt=""
        />
        <div class="dropdown-content">
          <div onClick={routeToViewProfile}>VIEW PROFILE</div>
          <div onClick={routeToAbout}>ABOUT</div>
          <div onClick={routeToTermsAndConditions}>TERMS AND CONDITIONS</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMatrimony;
