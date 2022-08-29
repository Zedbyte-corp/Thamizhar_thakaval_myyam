import './detailCard.matrimony.css';
// import bride from '../../../Assets/TamilMatrimony/home/bride.jpeg'
import { useNavigate } from "react-router-dom";
import { Store } from "../../../store/store";
// import { useDispatch } from "react-redux";
import { setViewPopup } from "../../../store/actions";

function DetailCardMatrimony({user_id, name, age, height, religion, caste, profile_pic, gender}) {

  const navigate = useNavigate();
  console.log(user_id, "<- user_id from card details");
  // const dispatch = useDispatch();

  const onclickView = () => {
    // Store.dispatch(setViewPopup(true))
    navigate('/Matrimony/details', { state: { id: user_id } });
  }
  
  const onclickverify = () => {
    document.getElementById("view_popup").style.display="flex";
    // alert("payment mode under construction")
  }

  // design started here
  return (
    <div className="matrimony_detail_card">
      <div className="matrimony_detail_card_up">
        <div className="matrimony_detail_card_up_left">
          <img className="matrimony_card_image" src={profile_pic} alt="" />
        </div>
        <div className="matrimony_detail_card_up_right">
          <h1 className="martimony_card_title">{gender}</h1>
          <div className="martimony_card_heading">Name</div>
          <div className="matrimony_card_value">{name}</div>
          <div className="martimony_card_heading">Age</div>
          <div className="matrimony_card_value">{age}</div>
          <div className="martimony_card_heading">Height</div>
          <div className="matrimony_card_value">{height} ft</div>
          <div className="martimony_card_heading">Religian, Caste</div>
          <div className="matrimony_card_value">
            {religion}, {caste}
          </div>
        </div>
      </div>
      <div className="matrimony_detail_card_down">
        <button className="matrimony_card_button_1" onClick={onclickverify}>VERIFY</button>
        <button className="matrimony_card_button_2" onClick={onclickView}>
          VIEW
        </button>
      </div>
    </div>
  );
}

export default DetailCardMatrimony;
