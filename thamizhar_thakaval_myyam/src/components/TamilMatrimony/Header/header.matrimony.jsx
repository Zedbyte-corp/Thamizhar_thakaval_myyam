import './header.matrimony.css';
import logo from "../../../Assets/Login/logo.png"




function HeaderMatrimony() {
  // design started here
  return (
    <div className='matrimony_header_main'>
      <div className='matrimony_header_logo'>
      {/* <div className="logo"> */}
          <img className="logo_image_matrimony" src={logo} alt="" />
        {/* </div> */}
      </div>
      <div>
      </div>
    </div>
  );
}

export default HeaderMatrimony;
