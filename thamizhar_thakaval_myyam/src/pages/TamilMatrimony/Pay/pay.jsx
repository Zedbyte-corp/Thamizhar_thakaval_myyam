import "./pay.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
// import wedding_bg from "../../../Assets/TamilMatrimony/register/wedding_bg.png";
import { useNavigate } from "react-router-dom";
import { initiatePaymentApiResponse } from "./../../../networkcall.service";

function Pay() {
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

      <div className="pay_matrimony_main_container">
        <div className="pay_matrimony_title">Payment</div>
        <button
          onClick={async () => {
            await initiatePaymentApiResponse({
              amount: 100.0,
              mateUserId: "123asdf",
              name: "nameeee",
              phone: "1234567890",
              email: "asd@gmail.com",
            });
          }}
        >
          submit
        </button>
      </div>
    </section>
  );
}

export default Pay;
