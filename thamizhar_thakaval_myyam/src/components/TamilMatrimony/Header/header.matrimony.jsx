import "./header.matrimony.css";
import logo from "../../../Assets/Login/Logo2.png";
import profile from "../../../Assets/TamilMatrimony/home/profile_white.png";
import { useNavigate, useLocation } from "react-router-dom";


function HeaderMatrimony() {
  const location = useLocation();
  const navigate = useNavigate();


  function onClickprofile() {
    console.log("profile clicked");
  }

  function onClickHome() {
    console.log("profile clicked");
    // alert(location.pathname)
    if(location.pathname !== "/Matrimony/register"){
      navigate("/Matrimony/home");
    }else{
      alert("Please login")
    }
  }

  function routeToViewProfile() {
    console.log("routeToViewProfile clicked");
    if(location.pathname !== "/Matrimony/register"){
      navigate("/Matrimony/details", { state: { id: sessionStorage.getItem("user_id") } });
    }else{
      alert("please login")
    }
  }

  function routeToViewPrice() {
    // console.log("routeToAbout clicked");
    navigate("/Matrimony/pricing");
  }

  function routeToAbout() {
    // console.log("routeToAbout clicked");
    navigate("/Matrimony/about");
  }

  function routeToVision() {
    // console.log("routeToAbout clicked");
    navigate("/Matrimony/vision_and_mission");
  }

  function routeToTermsAndConditions() {
    // console.log("routeToTermsAndConditions clicked");
    navigate("/Matrimony/terms");
  }

  function routeToLogin() {
    // console.log("routeToTermsAndConditions clicked");
    navigate("/");
  }

  
  // design started here
  return (
    <div className="matrimony_header_main">
      <div className="matrimony_header_logo">
        <img onClick={onClickHome} className="logo_image_matrimony" src={logo} alt="" />
        {/* <div>THAMIZHAR THAKKAVAL MAYYAM</div> */}
      </div>
      <div class="dropdown">
        <img
          onClick={onClickprofile}
          className="profile_image_matrimony dropbtn"
          src={profile}
          alt=""
        />
        <div class="dropdown-content">
          <div onClick={routeToViewProfile}>VIEW PROFILE</div>
          <div onClick={routeToViewPrice}>PRICING</div>
          <div onClick={routeToAbout}>ABOUT</div>
          <div onClick={routeToVision}>Vision And Mission</div>
          <div onClick={routeToTermsAndConditions}>TERMS AND CONDITIONS</div>
          <div onClick={routeToLogin}>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMatrimony;
