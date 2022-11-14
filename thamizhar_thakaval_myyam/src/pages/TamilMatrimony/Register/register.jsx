import "./register.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
import wedding_bg from "../../../Assets/TamilMatrimony/register/wedding_bg.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  getRegisterApiResponse,
  getPhoneVerificationResponse
  // sendOTPApiResponse,
} from "../../../networkcall.service";
import * as Yup from "yup";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect, useRef } from "react";
import { verifyOTPApiResponse } from "./../../../networkcall.service";
import { firebase, auth } from "../../Authentication/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { render } from '@testing-library/react';

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Register() {


  const renderRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
        }
        ,
        'expired-callback': response => {
          console.log(response);
        }

      },
      auth
    );

    let recaptchaVerifier = window.recaptchaVerifier;
    recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });
  }


  const signInOTP = async () => {
    try {
      const result = signInWithPhoneNumber(auth, values.phone_no, window.recaptchaVerifier)
      setfinal(result);
      setStatus(STATUS.STARTED);
      setSecondsRemaining(60);
      setRequestedOTP(true);
      alert("code sent");
    } catch (err) {
      alert(err);
      console.log(err);
      window.grecaptcha.reset(window.recaptchaWidgetId);
      window.recaptchaWidgetId = undefined;
      window.recaptchaVerifier.clear();
    }
  }

  // let [othersFlag, setOthersFlag] = useState(false);
  const navigate = useNavigate();
  let [num, setNum] = useState(0);
  let [profile, setProfile] = useState();
  let [heroscope, setHeroscope] = useState();
  let [photos, setPhotos] = useState();
  let [length, setLength] = useState();
  let [requestedOTP, setRequestedOTP] = useState(false);
  let [verifiedOTP, setVerifiedOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [final, setfinal] = useState("");

  //Timer
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [status, setStatus] = useState(STATUS.STOPPED);
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );

  let minSibCount = 0;
  let maxSibCount = 3;
  let incNum = () => {
    if (num < maxSibCount) {
      setNum(num + 1);
    }
  };
  let decNum = () => {
    if (num > minSibCount) {
      setNum(num - 1);
    }
  };

  function editphonenumber() {
    if (window.confirm("are you sure you want to edit the phonenumber ?") === true) {
      setVerifiedOTP(false)
      setRequestedOTP(false)
    }
  }

  // // let appVerifier;
  // async function getOTP() {
  //   let response = await getPhoneVerificationResponse(values.phone_no);
  //   if (response.status !== "success") {
  //     if (window.recaptchaVerifier !== undefined) {
  //       window.recaptchaVerifier.recaptcha.reset();
  //       window.recaptchaVerifier.clear();
  //     }

  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: (response) => {
  //           console.log(response);
  //           // reCAPTCHA solved, allow signInWithPhoneNumber.
  //           // ...
  //         },
  //         "expired-callback": () => {
  //           // Response expired. Ask user to solve reCAPTCHA again.
  //           // ...
  //         },
  //         "error-callback": function () {
  //           //...
  //         },
  //       },
  //       auth
  //     );
  //     let appVerifier = window.recaptchaVerifier;
  //     console.log("appVerifier", appVerifier);

  //     signInWithPhoneNumber(auth, values.phone_no, appVerifier)
  //       .then((result) => {
  //         setStatus(STATUS.STARTED);
  //         setSecondsRemaining(60);
  //         setfinal(result);
  //         alert("code sent");
  //         setRequestedOTP(true);
  //       })
  //       .catch((err) => {
  //         alert(err);
  //         // window.location.reload();
  //       });
  //   } else {
  //     alert(response.message)
  //   }
  // }

  async function checkvalue(values) {
    if (verifiedOTP === true) {
      if (values.password === values.confirm_password) {
        values.number_of_sibiling = num.toString();
        if (window.confirm("once you register, you cannot change the information, do you want to continue ?") === true) {
          setLoading(true)
          await getRegisterApiResponse(values, navigate);
          setLoading(false)
        }
      } else {
        alert("password and confirm password are not same");
      }
    } else {
      alert("Please verify the phone number first");
    }
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    dob: Yup.date()
      .default(() => new Date())
      .optional("Optional"),
    age: Yup.number().typeError('you must specify a number').positive().integer().required("Required"),
    weight: Yup.number().typeError('you must specify a number').positive().required("Required"),
    height: Yup.number().typeError('you must specify a number').positive().required("Required"),
    caste: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    religion: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    food_habit: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    looking_for: Yup.string()
      .required("Required"),
      martial_status: Yup.string().required("Required"),
    fathers_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    fathers_occupation: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    mothers_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    mothers_occupation: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    fathers_native_place: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    mothers_native_place: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    family_property: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .nullable()
      .optional("Optional"),
    // other_info: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(100, "Too Long!")
    //   .nullable()
    //   .optional("Optional"),
    expectation: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .nullable()
      .optional("Optional"),

    phone_no: Yup.string()
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Phone number is not valid"
      )
      .required("Required"),
    otp: Yup.number().typeError('you must specify a number').optional("Optional"),
    pin_code: Yup.number().typeError('you must specify a number')
      .required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        "",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    email: Yup.string().email().typeError('invalid email format').required("Required"),
    city: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    address: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    academic_qualification: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    last_studied_institution: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    company_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    location: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    profession: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    monthly_net_income: Yup.number().typeError('you must specify a number').required("Required"),
    // liabilities: Yup.number().typeError('you must specify a number').optional("Optional"),
    annual_gross_income: Yup.number().typeError('you must specify a number').required("Required"),
    physical_status: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    diet: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    body_type: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    complexion: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    hobbies: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    first_sibiling_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .optional("Optional"),
    first_sibiling_occupation: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .optional("Optional"),
    first_sibiling_maritial_status: Yup.string()
      .notOneOf(["Married", "Single", "Divorced"], "please select")
      .optional("Optional"),
    second_sibiling_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .optional("Optional"),
    second_sibiling_occupation: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .optional("Optional"),
    second_sibiling_maritial_status: Yup.string()
      .notOneOf(["Married", "Single", "Divorced"], "please select")
      .optional("Optional"),
    third_sibiling_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .optional("Optional"),
    third_sibiling_occupation: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .optional("Optional"),
    third_sibiling_maritial_status: Yup.string()
      .notOneOf(["Married", "Single", "Divorced"], "please select")
      .optional("Optional"),
    photos: Yup.mixed()
      .test('required', "Please upload a Photos", (value) => {
        return value != null
      }),
    profile: Yup.mixed()
      .test('required', "Please upload a Profile Photo", (value) => {
        return value != null
      })
      .test("type", "We only support jpeg,jpg and png format", function (value) {
        return value && (value.type === "image/jpg" || value.type === "image/jpeg" || value.type === "image/png");
      }),
    horoscope: Yup.mixed()
      .test('required', "Please upload a horoscope Photo", (value) => {
        return value != null
      })
      .test("type", "We only support jpeg,jpg and png format", function (value) {
        return value && (value.type === "image/jpg" || value.type === "image/jpeg" || value.type === "image/png");
      }),
  });

  // function getDietValue() {
  //   if (values.diet === 'Other') {
  //     setOthersFlag(true);
  //   }
  // }

  // initializing formik form
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    // validationSchema: LoginSchema,
    initialValues: {
      name: "",
      dob: "",
      age: null,
      weight: null,
      email: "",
      height: null,
      caste: "",
      religion: "Hinduism",
      food_habit: "Vegetarian",
      hobbies: "",
      looking_for: "Bride",
      martial_status:"Single",
      fathers_name: "",
      fathers_occupation: "",
      mothers_name: "",
      mothers_occupation: "",
      fathers_native_place: "",
      mothers_native_place: "",
      number_of_sibiling: "0",
      first_sibiling_name: "",
      first_sibiling_occupation: "",
      first_sibiling_maritial_status: "",
      second_sibiling_name: "",
      second_sibiling_occupation: "",
      second_sibiling_maritial_status: "",
      third_sibiling_name: "",
      third_sibiling_occupation: "",
      third_sibiling_maritial_status: "",
      family_property: "",
      other_info: "",
      expectation: "",
      phone_no: "",
      otp: "",
      pin_code: "",
      password: "",
      confirm_password: "",
      city: "",
      address: "",
      academic_qualification: "",
      last_studied_institution: "",
      company_name: "",
      location: "",
      profession: "",
      monthly_net_income: "",
      liabilities: "",
      annual_gross_income: "",
      physical_status: "Normal",
      diet: "",
      body_type: "",
      complexion: "",
      profile: "",
      horoscope: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => checkvalue(values),
  });

  // console.log(values);

  // design started here
  return (
    <section className="register_main">
      <HeaderMatrimony />
      <div className="matrimony_register_image">
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
      </div>

      <div className="matrimony_register_main_container">
        <div className="matrimony_register_left">
          <div className="matrimony_register_anchor">
            <div className="matrimony_register_anchor_button">
              <HashLink smooth to={"#personal-details"} className="hashlink">
                Personal Details
              </HashLink>
            </div>
            <div className="matrimony_register_anchor_button">
              <HashLink smooth to={"#contact-details"} className="hashlink">
                Contact Details
              </HashLink>
            </div>
            <div className="matrimony_register_anchor_button">
              <HashLink smooth to={"#education-details"} className="hashlink">
                Education & Career Details
              </HashLink>
            </div>
            <div className="matrimony_register_anchor_button">
              <HashLink smooth to={"#appearance-details"} className="hashlink">
                Lifestyle & Appearance
              </HashLink>
            </div>
            <div className="matrimony_register_anchor_button">
              <HashLink smooth to={"#images-details"} className="hashlink">
                Images and Horoscope
              </HashLink>
            </div>
          </div>
        </div>
        <div className="matrimony_register_right">
          <form
            className="matrimony_register_form_main_container"
            onSubmit={handleSubmit}
          >
            <div className="matrimony_register_personal_details">
              <div
                className="matrimony_register_form_title"
                id="personal-details"
              >
                Personal Details
              </div>
              <div className="matrimony_register_align_form">
                <div className="matrimony_register_label_input">
                  <label htmlFor="name">Name</label>
                  <input
                    className="register_field"
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {touched.name && errors.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="dob">DOB</label>
                  <input
                    className="register_field"
                    type="date"
                    name="dob"
                    id="dob"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dob}
                  />
                  {touched.dob && errors.dob ? (
                    <div className="error">{errors.dob}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="age">Age</label>
                  <input
                    className="register_field"
                    type="text"
                    name="age"
                    id="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                  />
                  {touched.age && errors.age ? (
                    <div className="error">{errors.age}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="weight">Weight in kgs</label>
                  <input
                    className="register_field"
                    type="text"
                    name="weight"
                    id="weight"
                    placeholder="eg: 70"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.weight}
                  />
                  {touched.weight && errors.weight ? (
                    <div className="error">{errors.weight}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="height">Height in fts</label>
                  <input
                    className="register_field"
                    type="text"
                    name="height"
                    id="height"
                    placeholder="eg: 6"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.height}
                  />
                  {touched.height && errors.height ? (
                    <div className="error">{errors.height}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="caste">Caste</label>
                  <input
                    className="register_field"
                    type="text"
                    name="caste"
                    id="caste"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.caste}
                  />
                  {touched.caste && errors.caste ? (
                    <div className="error">{errors.caste}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="religion">Religion</label>
                  <select
                    className="register_field"
                    name="religion"
                    id="Religion"
                    value={values.religion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="Hinduism" label="Hinduism">
                      Hinduism
                    </option>
                    <option value="Islam" label="Islam">
                      Islam
                    </option>
                    <option value="Sikhism" label="Sikhism">
                      Sikhism
                    </option>
                    <option value="Christianity" label="Christianity">
                      Christianity
                    </option>
                    <option value="Buddhism" label="Buddhism">
                      Buddhism
                    </option>
                    <option value="Jainism" label="Jainism">
                      Jainism
                    </option>
                    <option value="Zoroastrianism" label="Zoroastrianism">
                      Zoroastrianism
                    </option>
                  </select>
                  {touched.religion && errors.religion ? (
                    <div className="error">{errors.religion}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="food_habit">Food Habit</label>
                  <select
                    className="register_field"
                    name="food_habit"
                    value={values.food_habit}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="Vegetarian" label="Vegetarian">
                      Vegetarian
                    </option>
                    <option value="Non-Vegetarian" label="Non-Vegetarian">
                      Non-Vegetarian
                    </option>
                    <option value="Vegan" label="Vegan">
                      Vegan
                    </option>
                  </select>
                  {touched.food_habit && errors.food_habit ? (
                    <div className="error">{errors.food_habit}</div>
                  ) : null}
                </div>

                <div className="matrimony_register_label_input">
                  <label htmlFor="hobbies">Hobbies</label>
                  <input
                    className="register_field"
                    type="text"
                    name="hobbies"
                    id="hobbies"
                    placeholder="eg: books, cricket, football"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hobbies}
                  />
                  {touched.hobbies && errors.hobbies ? (
                    <div className="error">{errors.hobbies}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="looking_for">Looking For</label>
                  {/* <input
                    className="register_field"
                    type="text"
                    name="looking_for"
                    id="looking_for"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.looking_for}
                  /> */}
                  <select
                    className="register_field"
                    name="looking_for"
                    value={values.looking_for}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  // style={{ display: "block" }}
                  >
                    {/* <option value="" label="please select">
                      please select{" "}
                    </option> */}
                    <option value="Bride" label="Bride">
                      Bride
                    </option>
                    <option value="Groom" label="Groom">
                      Groom
                    </option>
                  </select>
                  {touched.looking_for && errors.looking_for ? (
                    <div className="error">{errors.looking_for}</div>
                  ) : null}
                </div>

                <div className="matrimony_register_label_input">
                  <label htmlFor="marital_status">Marital Status</label>
            
                  <select
                    className="register_field"
                    name="marital_status"
                    value={values.martial_status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  // style={{ display: "block" }}
                  >

                    {/* <option value="" label="please select">
                      please select{" "}
                    </option> */}
                    
                    <option value="Single" label="Single">
                      Single
                    </option>
                    <option value="Divorced" label="Divorced">
                      Divorced
                    </option>
                    <option value="widowed" label="widowed">
                      widowed
                    </option>
                  </select>
                  {touched.martial_status && errors.martial_status ? (
                    <div className="error">{errors.martial_status}</div>
                  ) : null}
                </div>

              </div>
            </div>

            <div className="matrimony_register_personal_details">
              <div
                className="matrimony_register_form_title"
                id="family-details"
              >
                Family Details
              </div>
              <div className="matrimony_register_align_form">
                <div className="matrimony_register_label_input">
                  <label htmlFor="fathers_name">Father’s Name</label>
                  <input
                    className="register_field"
                    type="text"
                    name="fathers_name"
                    id="fathers_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fathers_name}
                  />
                  {touched.fathers_name && errors.fathers_name ? (
                    <div className="error">{errors.fathers_name}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="fathers_occupation">
                    Father’s Occupation
                  </label>
                  <input
                    className="register_field"
                    type="text"
                    name="fathers_occupation"
                    id="fathers_occupation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fathers_occupation}
                  />
                  {touched.fathers_occupation && errors.fathers_occupation ? (
                    <div className="error">{errors.fathers_occupation}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="mothers_name">Mother’s Name</label>
                  <input
                    className="register_field"
                    type="text"
                    name="mothers_name"
                    id="mothers_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mothers_name}
                  />
                  {touched.mothers_name && errors.mothers_name ? (
                    <div className="error">{errors.mothers_name}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="mothers_occupation">
                    Mother’s Occupation
                  </label>
                  <input
                    className="register_field"
                    type="text"
                    name="mothers_occupation"
                    id="mothers_occupation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mothers_occupation}
                  />
                  {touched.mothers_occupation && errors.mothers_occupation ? (
                    <div className="error">{errors.mothers_occupation}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="fathers_native_place">
                    Father's Native Place
                  </label>
                  <input
                    className="register_field"
                    type="text"
                    name="fathers_native_place"
                    id="fathers_native_place"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fathers_native_place}
                  />
                  {touched.mothers_occupation && errors.mothers_occupation ? (
                    <div className="error">{errors.mothers_occupation}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="mothers_native_place">
                    Mother's Native Place
                  </label>
                  <input
                    className="register_field"
                    type="text"
                    name="mothers_native_place"
                    id="mothers_native_place"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mothers_native_place}
                  />
                  {touched.mothers_native_place && errors.mothers_native_place ? (
                    <div className="error">{errors.mothers_native_place}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="number_of_sibiling">
                    Number of Sibilings
                  </label>
                  <div className="sibiling_button" type="button" onClick={decNum}>
                    -
                  </div>
                  <div className="register_field">{num}</div>
                  {/* <input
                    className="register_field"
                    type="text"
                    name="number_of_sibiling"
                    id="number_of_sibiling"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number_of_sibiling}
                  /> */}
                  <div className="sibiling_button" type="button" onClick={incNum}>
                    +
                  </div>
                  {/* {touched.mothers_native_place && errors.mothers_native_place ? (
                    <div className="error">{errors.mothers_native_place}</div>
                  ) : null} */}
                </div>
                {num === 0 ? (
                  <div></div>
                ) : num === 1 ? (
                  <div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="first_sibiling_name">Name</label>
                      <input
                        className="register_field"
                        type="text"
                        name="first_sibiling_name"
                        id="first_sibiling_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_sibiling_name}
                      />
                      {touched.first_sibiling_name && errors.first_sibiling_name ? (
                        <div className="error">{errors.first_sibiling_name}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="first_sibiling_maritial_status">
                        Marritial Status
                      </label>
                      <select
                        className="register_field"
                        name="first_sibiling_maritial_status"
                        value={values.first_sibiling_maritial_status}
                        id="first_sibiling_maritial_status"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      // style={{ display: "block" }}
                      >
                        <option value="" label="please select">
                          please select{" "}
                        </option>
                        <option value="1" label="Married">
                          {" "}
                          Married
                        </option>
                        <option value="2" label="Single">
                          Single
                        </option>
                        <option value="3" label="Divorced">
                          Divorced
                        </option>
                      </select>
                      {touched.first_sibiling_maritial_status && errors.first_sibiling_maritial_status ? (
                        <div className="error">{errors.first_sibiling_maritial_status}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="first_sibiling_occupation">
                        Occupation
                      </label>
                      <input
                        className="register_field"
                        type="text"
                        name="first_sibiling_occupation"
                        id="first_sibiling_occupation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_sibiling_occupation}
                      />
                      {touched.first_sibiling_occupation && errors.first_sibiling_occupation ? (
                        <div className="error">{errors.first_sibiling_occupation}</div>
                      ) : null}
                    </div>
                  </div>
                ) : num === 2 ? (
                  <div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="first_sibiling_name">Name</label>
                      <input
                        className="register_field"
                        type="text"
                        name="first_sibiling_name"
                        id="first_sibiling_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_sibiling_name}
                      />
                      {touched.first_sibiling_name && errors.first_sibiling_name ? (
                        <div className="error">{errors.first_sibiling_name}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="first_sibiling_maritial_status">
                        Marritial Status
                      </label>
                      <select
                        className="register_field"
                        name="first_sibiling_maritial_status"
                        value={values.first_sibiling_maritial_status}
                        id="first_sibiling_maritial_status"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      // style={{ display: "block" }}
                      >
                        <option value="" label="please select">
                          please select{" "}
                        </option>
                        <option value="1" label="Married">
                          {" "}
                          Married
                        </option>
                        <option value="2" label="Single">
                          Single
                        </option>
                        <option value="3" label="Divorced">
                          Divorced
                        </option>
                      </select>
                      {touched.first_sibiling_maritial_status && errors.first_sibiling_maritial_status ? (
                        <div className="error">{errors.first_sibiling_maritial_status}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="first_sibiling_occupation">
                        Occupation
                      </label>
                      <input
                        className="register_field"
                        type="text"
                        name="first_sibiling_occupation"
                        id="first_sibiling_occupation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_sibiling_occupation}
                      />
                      {touched.first_sibiling_occupation && errors.first_sibiling_occupation ? (
                        <div className="error">{errors.first_sibiling_occupation}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="second_sibiling_name">Name</label>
                      <input
                        className="register_field"
                        type="text"
                        name="second_sibiling_name"
                        id="second_sibiling_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.second_sibiling_name}
                      />
                      {touched.second_sibiling_name && errors.second_sibiling_name ? (
                        <div className="error">{errors.second_sibiling_name}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="second_sibiling_maritial_status">
                        Marritial Status
                      </label>
                      <select
                        className="register_field"
                        name="second_sibiling_maritial_status"
                        value={values.second_sibiling_maritial_status}
                        id="second_sibiling_maritial_status"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      // style={{ display: "block" }}
                      >
                        <option value="" label="please select">
                          please select{" "}
                        </option>
                        <option value="1" label="Married">
                          {" "}
                          Married
                        </option>
                        <option value="2" label="Single">
                          Single
                        </option>
                        <option value="3" label="Divorced">
                          Divorced
                        </option>
                      </select>
                      {touched.second_sibiling_maritial_status && errors.second_sibiling_maritial_status ? (
                        <div className="error">{errors.second_sibiling_maritial_status}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="second_sibiling_occupation">
                        Occupation
                      </label>
                      <input
                        className="register_field"
                        type="text"
                        name="second_sibiling_occupation"
                        id="second_sibiling_occupation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.second_sibiling_occupation}
                      />
                      {touched.second_sibiling_occupation && errors.second_sibiling_occupation ? (
                        <div className="error">{errors.second_sibiling_occupation}</div>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="first_sibiling_name">Name</label>
                      <input
                        className="register_field"
                        type="text"
                        name="first_sibiling_name"
                        id="first_sibiling_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_sibiling_name}
                      />
                      {touched.first_sibiling_name && errors.first_sibiling_name ? (
                        <div className="error">{errors.first_sibiling_name}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="first_sibiling_maritial_status">
                        Marritial Status
                      </label>
                      <select
                        className="register_field"
                        name="first_sibiling_maritial_status"
                        value={values.first_sibiling_maritial_status}
                        id="first_sibiling_maritial_status"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      // style={{ display: "block" }}
                      >
                        <option value="" label="please select">
                          please select{" "}
                        </option>
                        <option value="1" label="Married">
                          {" "}
                          Married
                        </option>
                        <option value="2" label="Single">
                          Single
                        </option>
                        <option value="3" label="Divorced">
                          Divorced
                        </option>
                      </select>
                      {touched.first_sibiling_maritial_status && errors.first_sibiling_maritial_status ? (
                        <div className="error">{errors.first_sibiling_maritial_status}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="first_sibiling_occupation">
                        Occupation
                      </label>
                      <input
                        className="register_field"
                        type="text"
                        name="first_sibiling_occupation"
                        id="first_sibiling_occupation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_sibiling_occupation}
                      />
                      {touched.first_sibiling_occupation && errors.first_sibiling_occupation ? (
                        <div className="error">{errors.first_sibiling_occupation}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="second_sibiling_name">Name</label>
                      <input
                        className="register_field"
                        type="text"
                        name="second_sibiling_name"
                        id="second_sibiling_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.second_sibiling_name}
                      />
                      {touched.second_sibiling_name && errors.second_sibiling_name ? (
                        <div className="error">{errors.second_sibiling_name}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="second_sibiling_maritial_status">
                        Marritial Status
                      </label>
                      <select
                        className="register_field"
                        name="second_sibiling_maritial_status"
                        value={values.second_sibiling_maritial_status}
                        id="second_sibiling_maritial_status"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      // style={{ display: "block" }}
                      >
                        <option value="" label="please select">
                          please select{" "}
                        </option>
                        <option value="1" label="Married">
                          {" "}
                          Married
                        </option>
                        <option value="2" label="Single">
                          Single
                        </option>
                        <option value="3" label="Divorced">
                          Divorced
                        </option>
                      </select>
                      {touched.second_sibiling_maritial_status && errors.second_sibiling_maritial_status ? (
                        <div className="error">{errors.second_sibiling_maritial_status}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="second_sibiling_occupation">
                        Occupation
                      </label>
                      <input
                        className="register_field"
                        type="text"
                        name="second_sibiling_occupation"
                        id="second_sibiling_occupation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.second_sibiling_occupation}
                      />
                      {touched.second_sibiling_occupation && errors.second_sibiling_occupation ? (
                        <div className="error">{errors.second_sibiling_occupation}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="third_sibiling_name">Name</label>
                      <input
                        className="register_field"
                        type="text"
                        name="third_sibiling_name"
                        id="third_sibiling_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.third_sibiling_name}
                      />
                      {touched.third_sibiling_name && errors.third_sibiling_name ? (
                        <div className="error">{errors.third_sibiling_name}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="third_sibiling_maritial_status">
                        Marritial Status
                      </label>
                      <select
                        className="register_field"
                        name="third_sibiling_maritial_status"
                        value={values.third_sibiling_maritial_status}
                        id="third_sibiling_maritial_status"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      // style={{ display: "block" }}
                      >
                        <option value="" label="please select">
                          please select{" "}
                        </option>
                        <option value="1" label="Married">
                          {" "}
                          Married
                        </option>
                        <option value="2" label="Single">
                          Single
                        </option>
                        <option value="3" label="Divorced">
                          Divorced
                        </option>
                      </select>
                      {touched.third_sibiling_maritial_status && errors.third_sibiling_maritial_status ? (
                        <div className="error">{errors.third_sibiling_maritial_status}</div>
                      ) : null}
                    </div>
                    <div className="matrimony_register_label_input">
                      <label htmlFor="third_sibiling_occupation">
                        Occupation
                      </label>
                      <input
                        className="register_field"
                        type="text"
                        name="third_sibiling_occupation"
                        id="third_sibiling_occupation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.third_sibiling_occupation}
                      />
                      {touched.third_sibiling_occupation && errors.third_sibiling_occupation ? (
                        <div className="error">{errors.third_sibiling_occupation}</div>
                      ) : null}
                    </div>
                  </div>
                )}
                <div className="matrimony_register_label_input">
                  <label htmlFor="family_property">
                    Do you have any other Family Properties
                  </label>
                  <textarea
                    className="register_field_area"
                    name="family_property"
                    id="family_property"
                    placeholder="eg: Yes, we have two ground properties in our hometown of Tirunelveli."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.family_property}
                  />
                  {touched.family_property && errors.family_property ? (
                    <div className="error">{errors.family_property}</div>
                  ) : null}
                </div>
                {/* <div className="matrimony_register_label_input">
                  <label htmlFor="other_info">Other Information (if any)</label>
                  <textarea
                    className="register_field_area"
                    name="other_info"
                    id="other_info"
                    placeholder="eg: Yes, we have two ground properties in our hometown of Tirunelveli."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.other_info}
                  />
                  {touched.other_info && errors.other_info ? (
                        <div className="error">{errors.other_info}</div>
                      ) : null}
                </div> */}
                <div className="matrimony_register_label_input">
                  <label htmlFor="expectation">
                    What is you expectation from other side?
                  </label>
                  <textarea
                    className="register_field_area"
                    name="expectation"
                    id="expectation"
                    placeholder="eg: You are not required to give us any dowry."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expectation}
                  />
                  {touched.expectation && errors.expectation ? (
                    <div className="error">{errors.expectation}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="matrimony_register_personal_details">
              <div
                className="matrimony_register_form_title"
                id="education-details"
              >
                Education and Career
              </div>
              <div className="matrimony_register_align_form">
                <div className="matrimony_register_label_input">
                  <label htmlFor="academic_qualification">
                    Acedemic Qualification
                  </label>
                  <input
                    className="register_field"
                    type="text"
                    name="academic_qualification"
                    id="academic_qualification"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.academic_qualification}
                  />
                  {touched.academic_qualification && errors.academic_qualification ? (
                    <div className="error">{errors.academic_qualification}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="last_studied_institution">
                    Last Studied Institution
                  </label>
                  <input
                    className="register_field"
                    type="text"
                    name="last_studied_institution"
                    id="last_studied_institution"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_studied_institution}
                  />
                  {touched.last_studied_institution && errors.last_studied_institution ? (
                    <div className="error">{errors.last_studied_institution}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="company_name">Company Name</label>
                  <input
                    className="register_field"
                    type="text"
                    name="company_name"
                    id="company_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company_name}
                  />
                  {touched.company_name && errors.company_name ? (
                    <div className="error">{errors.company_name}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="location">Location</label>
                  <input
                    className="register_field"
                    type="text"
                    name="location"
                    id="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                  />
                  {touched.location && errors.location ? (
                    <div className="error">{errors.location}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="profession">Designation</label>
                  <input
                    className="register_field"
                    type="text"
                    name="profession"
                    id="profession"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.profession}
                  />
                  {touched.profession && errors.profession ? (
                    <div className="error">{errors.profession}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="monthly_net_income">Monthly Net Income</label>
                  <input
                    className="register_field"
                    type="text"
                    name="monthly_net_income"
                    id="monthly_net_income"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.monthly_net_income}
                  />
                  {touched.monthly_net_income && errors.monthly_net_income ? (
                    <div className="error">{errors.monthly_net_income}</div>
                  ) : null}
                </div>
                {/* <div className="matrimony_register_label_input">
                  <label htmlFor="liabilities">Liabilities (optional)</label>
                  <input
                    className="register_field"
                    type="text"
                    name="liabilities"
                    id="liabilities"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.liabilities}
                  />
                  {touched.liabilities && errors.liabilities ? (
                        <div className="error">{errors.liabilities}</div>
                      ) : null}
                </div> */}
                <div className="matrimony_register_label_input">
                  <label htmlFor="annual_gross_income">
                    Annual Gross Income
                  </label>
                  <input
                    className="register_field"
                    type="text"
                    name="annual_gross_income"
                    id="annual_gross_income"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.annual_gross_income}
                  />
                  {touched.annual_gross_income && errors.annual_gross_income ? (
                    <div className="error">{errors.annual_gross_income}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="matrimony_register_personal_details">
              <div
                className="matrimony_register_form_title"
                id="appearance-details"
              >
                Lifestyle & Appearance
              </div>
              <div className="matrimony_register_align_form">
                <div className="matrimony_register_label_input">
                  <label htmlFor="physical_status">Physical Status</label>
                  <select
                    className="register_field"
                    // type="text"
                    name="physical_status"
                    id="physical_status"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.physical_status}
                  >
                    <option value="Normal" label="Normal">
                      Normal{" "}
                    </option>
                    <option value="Visual Impairment" label="Visual Impairment">
                      {" "}
                      Visual Impairment
                    </option>
                    <option
                      value="Hearing Impairment"
                      label="Hearing Impairment"
                    >
                      Hearing Impairment
                    </option>
                    <option
                      value="Gustatory Impairment"
                      label="Gustatory Impairment"
                    >
                      Gustatory Impairment
                    </option>
                    <option
                      value="Somatosensory Impairment"
                      label="Somatosensory Impairment"
                    >
                      Somatosensory Impairment
                    </option>
                    <option value="Balance Disorders" label="Balance Disorders">
                      Balance Disorders
                    </option>
                    <option
                      value="Intellectual Disability"
                      label="Intellectual Disability"
                    >
                      Intellectual Disability
                    </option>
                    <option value="Mental Health" label="Mental Health">
                      Mental Health
                    </option>
                    <option
                      value="Emotional Disabilities"
                      label="Emotional Disabilities"
                    >
                      Emotional Disabilities
                    </option>
                    <option
                      value="Developmental Disability"
                      label="Developmental Disability"
                    >
                      Developmental Disability
                    </option>
                    <option
                      value="Invisible Disabilities"
                      label="Invisible Disabilities"
                    >
                      Invisible Disabilities
                    </option>
                  </select>
                  {values.physical_status !== "Normal" ? (
                    <input
                      className="register_field"
                      type="text"
                      name="physical_status"
                      id="physical_status"
                      placeholder="please enter the disorder"
                      // onChange={handleChange}
                      onBlur={handleBlur}
                    // value={values.physical_status}
                    />
                  ) : (
                    <div></div>
                  )}
                  {touched.physical_status && errors.physical_status ? (
                    <div className="error">{errors.physical_status}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="diet">Diet</label>
                  <select
                    className="register_field"
                    // type="text"
                    name="diet"
                    id="diet"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.diet}
                  >
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="Atkins diet" label="Atkins diet">
                      {" "}
                      Atkins diet
                    </option>
                    <option value="The Zone diet" label="The Zone diet">
                      The Zone diet
                    </option>
                    <option value="Ketogenic diet" label="Ketogenic diet">
                      Ketogenic diet
                    </option>
                    <option value="Vegetarian diet" label="Vegetarian diet">
                      Vegetarian diet
                    </option>
                    <option value="Vegan diet" label="Vegan diet">
                      Vegan diet
                    </option>
                    <option
                      value="Weight Watchers diet"
                      label="Weight Watchers diet"
                    >
                      Weight Watchers diet
                    </option>
                    <option value="South Beach diet" label="South Beach diet">
                      South Beach diet
                    </option>
                    <option value="Raw food diet" label="Raw food diet">
                      Raw food diet
                    </option>
                    <option
                      value="Mediterranean diet"
                      label="Mediterranean diet"
                    >
                      Mediterranean diet
                    </option>
                    <option value="Other" label="Other">
                      Other
                    </option>
                  </select>
                  {values.diet === "Other" ? (
                    <input
                      className="register_field"
                      type="text"
                      name="diet"
                      id="diet"
                      // onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="please enter your diet type"
                    // value={values.diet}
                    />
                  ) : (
                    <div></div>
                  )}
                  {touched.diet && errors.diet ? (
                    <div className="error">{errors.diet}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="body_type">Body Type</label>
                  {values.looking_for === "Bride" ? (
                    <select
                      className="register_field"
                      // type="text"
                      name="body_type"
                      id="body_type"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.body_type}
                    >
                      <option value="" label="please select">
                        please select{" "}
                      </option>
                      <option value="Ectomorph" label="Ectomorph">
                        {" "}
                        Ectomorph
                      </option>
                      <option value="Endomorph" label="Endomorph">
                        Endomorph
                      </option>
                      <option value="Mesomorph" label="Mesomorph">
                        Mesomorph
                      </option>
                    </select>
                  ) : (
                    <select
                      className="register_field"
                      // type="text"
                      name="body_type"
                      id="body_type"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.body_type}
                    >
                      <option value="" label="please select">
                        please select{" "}
                      </option>
                      <option value="Triangle" label="Triangle">
                        {" "}
                        Triangle
                      </option>
                      <option
                        value="Inverted triangle"
                        label="Inverted triangle"
                      >
                        Inverted triangle
                      </option>
                      <option value="Rectangle" label="Rectangle">
                        Rectangle
                      </option>
                      <option value="Hourglass" label="Hourglass">
                        Hourglass
                      </option>
                      <option value="Oval" label="Oval">
                        Oval
                      </option>
                    </select>
                  )}
                  {touched.body_type && errors.body_type ? (
                    <div className="error">{errors.body_type}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="complexion">Complexion</label>
                  <select
                    className="register_field"
                    // type="text"
                    name="complexion"
                    id="complexion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.complexion}
                  // style={{ display: "block" }}
                  >
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="Very Fair" label="Very Fair">
                      {" "}
                      Very Fair
                    </option>
                    <option value="Fair" label="Fair">
                      Fair
                    </option>
                    <option value="Medium" label="Medium">
                      Medium
                    </option>
                    <option value="Olive" label="Olive">
                      Olive
                    </option>
                    <option value="Brown" label="Brown">
                      Brown
                    </option>
                    <option value="Black" label="Black">
                      Black
                    </option>
                  </select>
                  {touched.body_type && errors.body_type ? (
                    <div className="error">{errors.body_type}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="matrimony_register_personal_details">
              <div
                className="matrimony_register_form_title"
                id="contact-details"
              >
                Contact Details
              </div>
              <div className="matrimony_register_align_form">
                <div className="matrimony_register_label_input">
                  <label htmlFor="phone_no">Phone No</label>
                  {
                    !verifiedOTP ?
                      <input
                        className="register_field"
                        type="text"
                        name="phone_no"
                        id="phone_no"
                        placeholder="eg: +919876543210"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone_no}
                      />
                      : <div className="register_field">{values.phone_no}</div>
                  }
                  {touched.phone_no && errors.phone_no ? (
                    <div className="error">{errors.phone_no}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="pin_code">Pin Code</label>
                  <input
                    className="register_field"
                    type="text"
                    name="pin_code"
                    id="pin_code"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pin_code}
                  />
                  {touched.pin_code && errors.pin_code ? (
                    <div className="error">{errors.pin_code}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="email">Email</label>
                  <input
                    className="register_field"
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="city">City</label>
                  <input
                    className="register_field"
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                  {touched.city && errors.city ? (
                    <div className="error">{errors.city}</div>
                  ) : null}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="register_field_area"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  {touched.address && errors.address ? (
                    <div className="error">{errors.address}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="matrimony_register_personal_details">
              <div
                className="matrimony_register_form_title"
                id="contact-details"
              >
                Verify Phone Number
              </div>
              {!verifiedOTP ? <div className="matrimony_register_align_form">
                <div className="matrimony_register_label_input">
                  <label htmlFor="phone_no">Phone No</label>
                  <input
                    className="register_field"
                    type="text"
                    name="phone_no"
                    placeholder="eg: +919876543210"
                    id="phone_no"
                    onChange={handleChange}
                    onInput={() => {
                      if (requestedOTP === true || verifiedOTP === true) {
                        setRequestedOTP(false);
                        setVerifiedOTP(false);
                      } else {
                        return null;
                      }
                    }}
                    onBlur={handleBlur}
                    value={values.phone_no}
                  />
                  {touched.phone_no && errors.phone_no ? (
                    <div className="error">{errors.phone_no}</div>
                  ) : null}
                </div>
                {requestedOTP === true ? (
                  <div className="matrimony_register_label_input">
                    <label htmlFor="otp">OTP</label>
                    <input
                      className="register_field"
                      type="text"
                      name="otp"
                      id="otp"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.otp}
                    />
                    {touched.otp && errors.otp ? (
                      <div className="error">{errors.otp}</div>
                    ) : null}
                  </div>
                ) : (
                  <div></div>
                )}



                <div
                  id="recaptcha-container"
                  className="matrimony_register_button"
                  onClick={async () => {
                    if (secondsRemaining === 0) {
                      if (requestedOTP === true) {
                        await signInOTP();
                      } else {
                        renderRecaptcha();
                        await signInOTP();
                      }
                    } else {
                      alert(`You can retry after ${secondsRemaining} seconds`);
                    }
                  }}
                >
                  {requestedOTP === true ? (secondsRemaining === 0) ? "retry" : `${String(minutesToDisplay).padStart(2, "0")}:${String(secondsToDisplay).padStart(2, "0")}
                    ` : "Get OTP"}
                </div>
                {requestedOTP === true ? (
                  <div
                    className="matrimony_register_button"
                    onClick={() => {
                      if (values.otp === null || final === null) return;
                      final
                        .confirm(values.otp)
                        .then((result) => {
                          setVerifiedOTP(true);
                          setStatus(STATUS.STOPPED);
                          setSecondsRemaining(0);
                          alert("OTP Verified");
                        })
                        .catch((err) => {
                          alert("Wrong code");
                        });
                      // var response = verifyOTPApiResponse({
                      //   phone: values.phone_no,
                      //   otp: values.otp,
                      // });
                      // if (response.status === 200) {
                      //   setVerifiedOTP(true);
                      // }
                    }}
                  >
                    Verify OTP
                  </div>
                ) : (
                  <div></div>
                )}
              </div> : <div className="phone_verify">
                {values.phone_no} is successfully verified
                <button className="matrimony_register_button" onClick={() => { editphonenumber() }}>Edit PhoneNumber</button>
              </div>}
            </div>

            <div className="matrimony_register_personal_details">
              <div
                className="matrimony_register_form_title"
                id="contact-details"
              >
                Set Password
              </div>
              <div className="matrimony_register_align_form">
                <div className="matrimony_register_label_input">
                  <label htmlFor="password">Password</label>
                  <input
                    className="register_field"
                    type="text"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                </div>

                <div className="matrimony_register_label_input">
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input
                    className="register_field"
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirm_password}
                  />
                  {touched.confirm_password && errors.confirm_password ? (
                    <div className="error">{errors.confirm_password}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="matrimony_register_personal_details">
              <div
                className="matrimony_register_form_title"
                id="images-details"
              >
                Images & Horoscope
              </div>

              <div className="matrimony_register_upload_button_container">
                <div className="matrimony_register_align_form">
                  <div className="matrimony_register_label_input_upload_button">
                    {profile !== undefined ? (
                      <img className="preview" src={profile} alt="" />
                    ) : (
                      <div></div>
                    )}
                    <label
                      className="matrimony_register_button"
                      htmlFor="profile"
                    >
                      Upload Profile Image
                    </label>
                    <input
                      className="matrimony_register_button_upload"
                      type="file"
                      name="profile"
                      id="profile"
                      onChange={(event) => {
                        setFieldValue("profile", event.currentTarget.files[0]);
                        setProfile(
                          URL.createObjectURL(event.currentTarget.files[0])
                        );
                      }}
                      onBlur={handleBlur}
                    // value={values.profile}
                    />
                    {/* <div className="error">choose a profile picture, <br/> Recommended format jpeg,png</div> */}
                    {errors.profile ? (
                      <div className="error">{errors.profile}</div>
                    ) : null}
                  </div>
                  {/* <button className="matrimony_register_button" type="submit">
                  Upload Profile
                </button> */}
                  <div className="matrimony_register_align_form">
                    <div className="matrimony_register_label_input_upload_button">
                      {length !== undefined ? (
                        <div>{length} photos selected</div>
                      ) : (
                        <div></div>
                      )}
                      <label
                        className="matrimony_register_button"
                        htmlFor="photos"
                      >
                        Add Photos
                      </label>
                      <input
                        className="matrimony_register_button_upload"
                        type="file"
                        name="photos"
                        id="photos"
                        onChange={(event) => {
                          setFieldValue("photos", event.currentTarget.files);
                          setLength(event.currentTarget.files.length);
                          setPhotos(JSON.stringify(event.currentTarget.files));
                        }}
                        onBlur={handleBlur}
                        // value={values.profile}
                        multiple
                      />
                      {/* <div className="error">choose maximum 5 photos, <br/> Recommended format jpeg,png</div> */}
                      {errors.photos ? (
                        <div className="error">{errors.photos}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="matrimony_register_align_form">
                    <div className="matrimony_register_label_input_upload_button">
                      {heroscope !== undefined ? (
                        <img className="preview" src={heroscope} alt="" />
                      ) : (
                        <div></div>
                      )}
                      <label
                        className="matrimony_register_button"
                        htmlFor="horoscope"
                      >
                        upload horoscope
                      </label>
                      <input
                        className="matrimony_register_button_upload"
                        type="file"
                        name="horoscope"
                        id="horoscope"
                        onChange={(event) => {
                          setFieldValue(
                            "horoscope",
                            event.currentTarget.files[0]
                          );
                          setHeroscope(
                            URL.createObjectURL(event.currentTarget.files[0])
                          );
                        }}
                        onBlur={handleBlur}
                      // value={values.profile}
                      />
                      {/* <div className="error">choose a horoscope image, <br/> Recommended format jpeg,png</div> */}
                      {errors.horoscope ? (
                        <div className="error">{errors.horoscope}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                {/* <button className="matrimony_register_button" type="submit">
                  Upload horoscope
                </button> */}
              </div>
            </div>

            <button className="matrimony_register_button" type="submit">
              Register
            </button>

            <div className="matrimony_register_page_terms">
              By clicking register, you are accepting the{" "}
              <span className="matrimony_register_span">
                Terms and Conditions{" "}
              </span>
              of{" "}
              <span className="matrimony_register_span">
                THAMIZHAR THAGAVAL MAYYAM
              </span>
            </div>
          </form>
        </div>
      </div>


      {/* loading */}
      {loading ? <div className="loading">
        <div className="loader"></div>
        Registration is in process..please wait
      </div> : null}
    </section>
  );
}

export default Register;
