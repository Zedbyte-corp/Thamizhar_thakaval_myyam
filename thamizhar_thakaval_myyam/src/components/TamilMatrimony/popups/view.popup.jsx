import "./view.popup.css";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { setViewPopup } from "../../../store/actions";
import pay from "../../../pages/TamilMatrimony/Pay/pay"
import { Navigate, useNavigate } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { Store } from "../../../store/store";


function ViewPopup({ popup_check }) {
  const navigate = useNavigate()
// const { setViewPopup } = useSelector((state) => state.userReducer);
// const setViewPopup = Store.getState()['userReducer']['setViewPopup'];
const dispatch = useDispatch();
// const [viewPopup, setViewPopup] = useState({popup_check});
// console.log("viewpopup",viewPopup);

  function onCancelPopup() {
    console.log("cancel clicked !!!!");
    dispatch(setViewPopup(false))
    // setViewPopup(false)
    document.getElementById("view_popup").style.display="none";
    navigate("/Matrimony/pay")
    // console.log(cancel);
  }
  
  function onPaymentpopup(type) {
    document.getElementById("view_popup").style.display="none";
    if(type === 1){
      navigate("/Matrimony/pay", { state: { id: "Discrete neighbor verification"} })
    }
    if(type === 2){
      navigate("/Matrimony/pay", { state: { id: "Employement verification"} })
    }
    if(type === 1){
      navigate("/Matrimony/pay", { state: { id: "Education verification"} })
    }
    if(type === 1){
      navigate("/Matrimony/pay", { state: { id: "Horoscope verification" } })
    }
    // navigate('/Matrimony/details', { state: { id: user_id } });
  }

  // design started here
  return (
    <>
      {setViewPopup ? (
        <div className="view_popup_main" id="view_popup">
          <div className="">
            To view detailed report please do subscribe our plan.
          </div>
          <div className="popup_buttons_container">
            <button className="view_popup_button" onClick={()=>{onPaymentpopup(1)}}>
              Discrete neighbor verification
            </button>
            <button className="view_popup_button" onClick={()=>{onPaymentpopup(2)}}>
              Employement verification
            </button>
            <button className="view_popup_button" onClick={()=>{onPaymentpopup(3)}}>
              Education verification
            </button>
            {/* <button className="view_popup_button" onClick={()=>{onPaymentpopup(4)}}>
              Horoscope verification
            </button> */}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default ViewPopup;
