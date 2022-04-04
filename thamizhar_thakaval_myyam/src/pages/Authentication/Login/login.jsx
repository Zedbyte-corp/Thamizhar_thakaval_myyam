import "./login.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

  async function checkvalue(values) {
    console.log(values);
    if(values.username === "123" && values.password === "123"){
        navigate('/Matrimony/home');
    }
    else{
        alert("check the crendentials")
    }
  }

  // initializing formik form
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      // validationSchema: LoginSchema,
      initialValues: { username: "", password: "" },
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
            {/* <img src={loginimg} alt="" /> */}
            <div className="login_switch">Matrimony / திருமண தகவல்கள்</div>
            <div className="login_switch">
              Job and Buisiness Details / வேலை & வியாபார தகவல்
            </div>
            <div className="login_switch">
              Tamil Friend Finder / தமிழ் நட்பு தேடுவோர்
            </div>
            <div className="login_switch">
              Organic & Traditional Products / இயற்கை & பாரம்பரிய பொருட்கள்
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
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && errors.username}
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
              <p>If you are a new user, REGISTER HERE</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
