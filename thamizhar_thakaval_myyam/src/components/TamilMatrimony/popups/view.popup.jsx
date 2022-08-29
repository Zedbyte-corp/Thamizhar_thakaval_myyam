import "./view.popup.css";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { setViewPopup } from "../../../store/actions";
// import { useSelector } from "react-redux";
// import { Store } from "../../../store/store";


function ViewPopup({ popup_check }) {
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
    // console.log(cancel);
  }
  
  function onPaymentpopup() {
    document.getElementById("view_popup").style.display="none";
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
            <button className="view_popup_button" onClick={onCancelPopup}>
              Discrete neighbor verification
            </button>
            <button className="view_popup_button" onClick={onPaymentpopup}>
              Employement verification
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default ViewPopup;
