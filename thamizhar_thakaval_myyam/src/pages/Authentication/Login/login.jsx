import "./login.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { getLoginApiResponse } from "../../../networkcall.service"
import { useState } from "react";
import login_bg from "../../../Assets/Login/login.jpeg"
import logo from "../../../Assets/Login/logo.png"
// import { useDispatch } from "react-redux";
// import { setUserId } from "../../../store/actions";
// import { useNavigate } from "react-router-dom";
// import { getLoginApiResponse } from "../../../networkcall.service";

function Login() {

  // const dispatch = useDispatch();

  const navigate = useNavigate();

  async function checkvalue(values) {
    console.log(values);
    let response = await getLoginApiResponse(values);
    if (response.status === "success") {
      console.log("user_id =>",response.result);
      sessionStorage.setItem("user_id", response.result);
      navigate("/Matrimony/home");
    } else {
      alert("check the crendentials");
    }
  }

  // const [value, setValue] = useState(0)

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
        <div className="logo">
          <img className="logo_image" src={logo} alt="" />
        </div>
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
        {/* <hr style="height: 49px;width: 2px;background: grey;"/> */}
      <hr />
        <div className="login_main_right">
          <div className="login_form_container">
            <form className="login_form" onSubmit={handleSubmit}>
              <h1>LOGIN</h1>
              <input
                className="field"
                placeholder="Enter PhoneNumber"
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && errors.phone}
              <input
                className="field"
                placeholder="Enter Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}

              <div className="login_forget_pssword">
                <span className="login_span">
                  <input type="checkbox" />
                  Are you an agent
                </span>
                <span className="login_span">
                  Forgot Password
                </span>
              </div>
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
