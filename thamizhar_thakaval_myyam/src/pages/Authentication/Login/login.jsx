import "./login.css";
import { useFormik } from "formik";
import React, { useState } from "react";
import login_bg from "../../../Assets/Login/login.jpeg";

import { useNavigate } from "react-router-dom";
import { getLoginApiResponse } from "../../../networkcall.service";

function Login() {
  const navigate = useNavigate();

  async function checkvalue(values) {
    console.log(values);
    let response = await getLoginApiResponse(values);
    if (response.status === "success") {
      navigate("/Matrimony/home");
    } else {
      alert("check the crendentials");
    }
  }

  const onClickRegister = () => {
    navigate("/Matrimony/register");
  };
  const [activeTab, setActiveTab] = useState(0);
  const onClickChange = (val) => {
    // setActiveTab(val);
  };

  // initializing formik form
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      // validationSchema: LoginSchema,
      initialValues: { phone: "", password: "" },
      onSubmit: (values) => checkvalue(values),
    });

  // design started here
  return (
    <div className="login_parent">
      <div className="login_header">
        <div className="logo">LOGO</div>
      </div>
      <div className="login_maincontainer">
        <div className="login_main_left">
          <div className="login_switch_page_container">
            <div className="login_switch_page_gradient">
              <img src={login_bg} alt="" className="login_switch_page_bg" />
              {/* <img src={loginimg} alt="" /> */}
              <button
                className={
                  activeTab === 0
                    ? "login_switch_active"
                    : "login_switch_inactive"
                }
                onClick={onClickChange(0)}
              >
                Matrimony / திருமண தகவல்கள்
              </button>
              <div
                className={
                  activeTab === 1
                    ? "login_switch_active"
                    : "login_switch_inactive"
                }
                // onClick={onClickChange(1)}
              >
                Job and Buisiness Details / வேலை & வியாபார தகவல்
              </div>
              <div
                className={
                  activeTab === 2
                    ? "login_switch_active"
                    : "login_switch_inactive"
                }
                // onClick={onClickChange(2)}
              >
                Tamil Friend Finder / தமிழ் நட்பு தேடுவோர்
              </div>
              <div
                className={
                  activeTab === 3
                    ? "login_switch_active"
                    : "login_switch_inactive"
                }
                // onClick={onClickChange(3)}
              >
                Organic & Traditional Products / இயற்கை & பாரம்பரிய பொருட்கள்
              </div>
            </div>
          </div>
        </div>
        {/* <svg height="210" width="500">
          <line
            x1="0"
            y1="0"
            y2="200"
            style="stroke:rgb(0,0,0);stroke-width:5"
          />
        </svg> */}
        <div className="login_main_right">
          <div className="login_form_container">
            <form className="login_form" onSubmit={handleSubmit}>
              <h1>LOGIN</h1>
              <input
                className="field"
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && errors.phone}
              <input
                className="field"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button className="login_button" type="submit">
                Login
              </button>
              <p>
                If you are a new user,{" "}
                <span className="register_button" onClick={onClickRegister}>
                  REGISTER HERE
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
