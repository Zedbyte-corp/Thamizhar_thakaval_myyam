import "./pay.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
// import wedding_bg from "../../../Assets/TamilMatrimony/register/wedding_bg.png";
// import { useNavigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  initiatePaymentApiResponse,
  verifyPaymentApiResponse,
} from "./../../../networkcall.service";
import { loadScript } from "../../../helper/utils";

function Pay() {
  const { state } = useLocation();
  const { id } = state;
  const navigate = useNavigate();

  async function renderPayment() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js",
      "script"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const initResult = await initiatePaymentApiResponse({
      amount: 1000,
      mateUserId: "123asdf",
      name: "nameeee",
      phone: "1234567890",
      // email: "asd@gmail.com",
    });
    if (initResult.status === "success") {
      const options = {
        key: "rzp_test_p3YfWDOufKJE9L",
        amount: initResult.result.amount,
        currency: initResult.result.currency,
        name: "Thamizhar Thakaval Mayyam",
        description: "Test Transaction",
        order_id: initResult.result.id,
        handler: async function (response) {
          const data = {
            orderCreationId: initResult.result.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          const valResult = await verifyPaymentApiResponse(data);
          alert(valResult.result);
        },
        prefill: {
          name: "Nivas",
          email: "SoumyaDey@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Zedbyte",
        },
        theme: {
          color: "#61dafb",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      alert("Payment failed!");
    }
  }

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
        <div>please click pay button to initiate payment</div>
        {
          id === "view" ? <div>To View The Profile Please Pay : 50Rs</div> : <div></div>
        }
        {
          id === "Discrete neighbor verification" ? <div>To Make Discrete Neighbor Verification Please Pay  : 500Rs</div> : <div></div>
        }
        {
          id === "Employement verification" ? <div>Note: need company name & address with designation 
          <br/>To Make Employement Verification Please Pay  : 500Rs</div> : <div></div>
        }
        {
          id === "Education verification" ? <div>Note: need the degree certificate copy & college name & address 
          <br/>To Make Education Verification Please Pay  : 500Rs</div> : <div></div>
        }
        {/* {
          id === "Horoscope verification" ? <div>Note: need the degree certificate copy & college name & address 
          <br/>To Make Horoscope Verification Please Pay  : 500Rs</div> : <div></div>
        } */}
        <button className="matrimony_search_button" onClick={renderPayment}>Pay</button>
      </div>
    </section>
  );
}

export default Pay;
