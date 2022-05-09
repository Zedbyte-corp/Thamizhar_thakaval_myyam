import './detailCard.matrimony.css';
import bride from '../../../Assets/TamilMatrimony/home/bride.jpeg'
import { useNavigate } from "react-router-dom";


function DetailCardMatrimony({name, age, height, religion, caste}) {
  const navigate = useNavigate();

  const onclickView = () => {
    navigate('/Matrimony/details');
  }
  // design started here
  return (
    <div className='matrimony_detail_card'>
      <div className="matrimony_detail_card_up">
          <div className="matrimony_detail_card_up_left">
              <img className="matrimony_card_image" src={bride} alt="" />
          </div>
          <div className="matrimony_detail_card_up_right">
              <h1 className='martimony_card_title'>BRIDE</h1>
              <div className="martimony_card_heading">Name</div>
              <div className="matrimony_card_value">{name}</div>
              <div className="martimony_card_heading">Age</div>
              <div className="matrimony_card_value">{age}</div>
              <div className="martimony_card_heading">Height</div>
              <div className="matrimony_card_value">{height} ft</div>
              <div className="martimony_card_heading">Religian, Caste</div>
              <div className="matrimony_card_value">{religion}, {caste}</div>
          </div>
      </div>
      <div className="matrimony_detail_card_down">
          <button className='matrimony_card_button_1'>VERIFY</button>
          <button className='matrimony_card_button_2' onClick={onclickView}>VIEW</button>
      </div>
    </div>
  );
}

export default DetailCardMatrimony;
