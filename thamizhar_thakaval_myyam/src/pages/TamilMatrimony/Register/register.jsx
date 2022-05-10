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
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      dob: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
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
      validationSchema: { SignupSchema },
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
                  <label htmlFor="Name">Name</label>
                  <input
                    className="register_field"
                    type="text"
                    name="name"
                    id="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && errors.name}
                </div>
                <div className="matrimony_register_label_input">
                  <label htmlFor="Name">DOB</label>
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
                  <label htmlFor="Name">Age</label>
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
                  <label htmlFor="Name">Weight in kgs</label>
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
                  <label htmlFor="Name">Height in fts</label>
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
                  <label htmlFor="Name">Caste</label>
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
                  <label htmlFor="Name">Religion</label>
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
                  <label htmlFor="Name">Food Habit</label>
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
                  <label htmlFor="Name">Smoke</label>
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
                    name="colorss"
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
                  <label htmlFor="Name">Drink</label>
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
                  <label htmlFor="Name">Hobbies</label>
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
                  <label htmlFor="Name">Looking For</label>
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
                  <label htmlFor="Name">Father’s Name</label>
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
                  <label htmlFor="Name">
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
                  <label htmlFor="Name">Mother’s Name</label>
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
                  <label htmlFor="Name">
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
                  <label htmlFor="Name">Father's Native Place</label>
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
                  <label htmlFor="Name">Mother's Native Place</label>
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
                  <label htmlFor="Name">Number of Sibilings</label>
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
                  <label htmlFor="Properties">
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
                  <label htmlFor="Name">Other Information (if any)</label>
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
                  <label htmlFor="Name">
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
                  <label htmlFor="Name">Phone No</label>
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
                  <label htmlFor="Name">Pin Code</label>
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
                  <label htmlFor="Name">Password</label>
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
                  <label htmlFor="Name">City</label>
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
                  <label htmlFor="Name">Address</label>
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
                  <label htmlFor="Name">Acedemic Qualification</label>
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
                  <label htmlFor="Name">Last Studied Institution</label>
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
                  <label htmlFor="Name">Company Name</label>
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
                  <label htmlFor="Name">Location</label>
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
                  <label htmlFor="Name">Profession</label>
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
                  <label htmlFor="Name">Monthly Net Income</label>
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
                  <label htmlFor="Name">Liabilities (optional)</label>
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
                  <label htmlFor="Name">Annual Gross Income</label>
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
                  <label htmlFor="Name">Physical Status</label>
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
                  <label htmlFor="Name">Diet</label>
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
                  <label htmlFor="Name">Body Type</label>
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
                  <label htmlFor="Name">Complexion</label>
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
