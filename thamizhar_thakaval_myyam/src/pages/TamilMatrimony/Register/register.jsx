import "./register.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
import wedding_bg from "../../../Assets/TamilMatrimony/register/wedding_bg.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { getRegisterApiResponse } from "../../../networkcall.service";
import * as Yup from "yup";
import { HashLink } from "react-router-hash-link";

function Register() {
  const navigate = useNavigate();

  // const onclickView = () => {
  //   navigate("/Matrimony/home");
  // };

  async function checkvalue(values) {
    console.log(values);
    let response = await getRegisterApiResponse(values);
    if (response.status === "success") {
      navigate("/Matrimony/home");
    } else {
      alert("check the crendentials");
    }
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    dob: Yup.date()
      .default(() => new Date())
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    age: Yup.number().positive().integer().required("Required"),
    weight: Yup.number().positive().required("Required"),
    height: Yup.number().positive().required("Required"),
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
    smoke: Yup.string()
      .notOneOf(["Yes", "No"], "please select")
      .required("Required"),
    drink: Yup.string()
      .notOneOf(["Yes", "Yo"], "please select")
      .required("Required"),
    looking_for: Yup.string()
      .notOneOf(["Bride", "Groom"], "please select")
      .required("Required"),
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
    // number_of_sibiling: Yup.string().max(4, "Too Long!").required("Required"),
    family_property: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .nullable()
      .optional("Optional"),
    other_info: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .nullable()
      .optional("Optional"),
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
    pin_code: Yup.number()
      .positive()
      .integer()
      .test("len", "Must be exactly 6 characters", (val) => val.length === 6)
      .required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
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
    monthly_net_income: Yup.number().positive().integer().required("Required"),
    liabilities: Yup.number()
      .positive()
      .integer()
      .nullable()
      .optional("Optional"),
    annual_gross_income: Yup.number().positive().integer().required("Required"),
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
  });

  // initializing formik form
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      // validationSchema: LoginSchema,
      initialValues: {
        name: "",
        dob: "",
        age: "",
        weight: "",
        height: "",
        caste: "",
        religion: "",
        food_habit: "",
        smoke: "",
        drink: "",
        hobbies: "",
        looking_for: "",
        fathers_name: "",
        fathers_occupation: "",
        mothers_name: "",
        mothers_occupation: "",
        fathers_native_place: "",
        mothers_native_place: "",
        number_of_sibiling: "",
        family_property: "",
        other_info: "",
        expectation: "",
        phone_no: "",
        pin_code: "",
        password: "",
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
        physical_status: "",
        diet: "",
        body_type: "",
        complexion: "",
        profile_pic: "",
        heroscope: "",
      },
      validationSchema: SignupSchema,
      onSubmit: (values) => checkvalue(values),
    });

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
              <HashLink smooth to={"#personal-details"}>
                Personal Details
              </HashLink>
            </div>
            <div className="matrimony_register_anchor_button">
              <HashLink smooth to={"#contact-details"}>
                Contact Details
              </HashLink>
            </div>
            <div className="matrimony_register_anchor_button">
              <HashLink smooth to={"#education-details"}>
                Education & Career Details
              </HashLink>
            </div>
            <div className="matrimony_register_anchor_button">
              <HashLink smooth to={"#appearance-details"}>
                Lifestyle & Appearance
              </HashLink>
            </div>
            <div className="matrimony_register_anchor_button">
              <HashLink smooth to={"#images-details"}>
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
                  {touched.name && errors.name && errors.name}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="dob">DOB</label>
                  <input
                    className="register_field"
                    type="text"
                    name="dob"
                    id="dob"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dob}
                  />
                  {errors.dob && touched.dob && errors.dob}
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
                  {errors.age && touched.age && errors.age}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="weight">Weight in kgs</label>
                  <input
                    className="register_field"
                    type="text"
                    name="weight"
                    id="weight"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.weight}
                  />
                  {errors.weight && touched.weight && errors.weight}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="height">Height in fts</label>
                  <input
                    className="register_field"
                    type="text"
                    name="height"
                    id="height"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.height}
                  />
                  {errors.height && touched.height && errors.height}
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
                  {errors.caste && touched.caste && errors.caste}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="religion">Religion</label>
                  <input
                    className="register_field"
                    type="text"
                    name="religion"
                    id="religion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.religion}
                  />
                  {errors.religion && touched.religion && errors.religion}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="food_habit">Food Habit</label>
                  <input
                    className="register_field"
                    type="text"
                    name="food_habit"
                    id="food_habit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.food_habit}
                  />
                  {errors.food_habit && touched.food_habit && errors.food_habit}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="smoke">Smoke</label>
                  {/* <input
                    className="register_field"
                    type="text"
                    name="smoke"
                    id="smoke"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.smoke}
                  /> */}
                  <select
                    className="register_field"
                    name="smoke"
                    value={values.color}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // style={{ display: "block" }}
                  >
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="1" label="No">
                      {" "}
                      No
                    </option>
                    <option value="2" label="Yes">
                      Yes
                    </option>
                  </select>
                  {errors.smoke && touched.smoke && errors.smoke}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="drink">Drink</label>
                  {/* <input
                    className="register_field"
                    type="text"
                    name="drink"
                    id="drink"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.drink}
                  /> */}
                  <select
                    className="register_field"
                    name="drink"
                    value={values.drink}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // style={{ display: "block" }}
                  >
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="1" label="No">
                      {" "}
                      No
                    </option>
                    <option value="2" label="Yes">
                      Yes
                    </option>
                  </select>
                  {errors.drink && touched.drink && errors.drink}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="hobbies">Hobbies</label>
                  <input
                    className="register_field"
                    type="text"
                    name="hobbies"
                    id="hobbies"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hobbies}
                  />
                  {errors.hobbies && touched.hobbies && errors.hobbies}
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
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="1" label="Bride">
                      {" "}
                      Bride
                    </option>
                    <option value="2" label="Groom">
                      Groom
                    </option>
                  </select>
                  {errors.looking_for &&
                    touched.looking_for &&
                    errors.looking_for}
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
                  {errors.fathers_name &&
                    touched.fathers_name &&
                    errors.fathers_name}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="fathers_occupation">
                    Father’s Occupation (with Designation)
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
                  {errors.fathers_occupation &&
                    touched.fathers_occupation &&
                    errors.fathers_occupation}
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
                  {errors.mothers_name &&
                    touched.mothers_name &&
                    errors.mothers_name}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="mothers_occupation">
                    Mother’s Occupation (with Designation)
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
                  {errors.mothers_occupation &&
                    touched.mothers_occupation &&
                    errors.mothers_occupation}
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
                  {errors.fathers_native_place &&
                    touched.fathers_native_place &&
                    errors.fathers_native_place}
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
                  {errors.mothers_native_place &&
                    touched.mothers_native_place &&
                    errors.mothers_native_place}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="number_of_sibiling">
                    Number of Sibilings
                  </label>
                  <input
                    className="register_field"
                    type="text"
                    name="number_of_sibiling"
                    id="number_of_sibiling"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number_of_sibiling}
                  />
                  {errors.number_of_sibiling &&
                    touched.number_of_sibiling &&
                    errors.number_of_sibiling}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="family_property">
                    Do you have any other Family Properties
                  </label>
                  <textarea
                    className="register_field_area"
                    name="family_property"
                    id="family_property"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.family_property}
                  />
                  {errors.family_property &&
                    touched.family_property &&
                    errors.family_property}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="other_info">Other Information (if any)</label>
                  <textarea
                    className="register_field_area"
                    name="other_info"
                    id="other_info"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.other_info}
                  />
                  {errors.other_info && touched.other_info && errors.other_info}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="expectation">
                    What is you expectation from other side?
                  </label>
                  <textarea
                    className="register_field_area"
                    name="expectation"
                    id="expectation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expectation}
                  />
                  {errors.expectation &&
                    touched.expectation &&
                    errors.expectation}
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
                  <input
                    className="register_field"
                    type="text"
                    name="phone_no"
                    id="phone_no"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone_no}
                  />
                  {errors.phone_no && touched.phone_no && errors.phone_no}
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
                  {errors.pin_code && touched.pin_code && errors.pin_code}
                </div>
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
                  {errors.password && touched.password && errors.password}
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
                  {errors.city && touched.city && errors.city}
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
                  {errors.address && touched.address && errors.address}
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
                  {errors.academic_qualification &&
                    touched.academic_qualification &&
                    errors.academic_qualification}
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
                  {errors.last_studied_institution &&
                    touched.last_studied_institution &&
                    errors.last_studied_institution}
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
                  {errors.company_name &&
                    touched.company_name &&
                    errors.company_name}
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
                  {errors.location && touched.location && errors.location}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="profession">Profession</label>
                  <input
                    className="register_field"
                    type="text"
                    name="profession"
                    id="profession"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.profession}
                  />
                  {errors.profession && touched.profession && errors.profession}
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
                  {errors.monthly_net_income &&
                    touched.monthly_net_income &&
                    errors.monthly_net_income}
                </div>
                <div className="matrimony_register_label_input">
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
                  {errors.liabilities &&
                    touched.liabilities &&
                    errors.liabilities}
                </div>
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
                  {errors.annual_gross_income &&
                    touched.annual_gross_income &&
                    errors.annual_gross_income}
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
                  <input
                    className="register_field"
                    type="text"
                    name="physical_status"
                    id="physical_status"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.physical_status}
                  />
                  {errors.physical_status &&
                    touched.physical_status &&
                    errors.physical_status}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="diet">Diet</label>
                  <input
                    className="register_field"
                    type="text"
                    name="diet"
                    id="diet"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.diet}
                  />
                  {errors.diet && touched.diet && errors.diet}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="body_type">Body Type</label>
                  <input
                    className="register_field"
                    type="text"
                    name="body_type"
                    id="body_type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body_type}
                  />
                  {errors.body_type && touched.body_type && errors.body_type}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="complexion">Complexion</label>
                  <input
                    className="register_field"
                    type="text"
                    name="complexion"
                    id="complexion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.complexion}
                  />
                  {errors.complexion && touched.complexion && errors.complexion}
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
              <div className="matrimony_register_align_form">
                <button className="matrimony_register_button" type="submit">
                  Upload Profile
                </button>
                <button className="matrimony_register_button" type="submit">
                  Upload horoscope
                </button>
              </div>
            </div>

            <button
              className="matrimony_register_button"
              // onClick={onclickView}
              type="submit"
            >
              Register
            </button>

            <div className="matrimony_register_page_terms">
              By clicking register, you are accepting the Terms and Conditions
              of THAMIZHAR THAGAVAL MAYYAM
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
