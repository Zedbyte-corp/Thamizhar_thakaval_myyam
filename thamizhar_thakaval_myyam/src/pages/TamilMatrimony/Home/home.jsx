import "./home.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
import DetailCardMatrimony from "../../../components/TamilMatrimony/DetailCard/detailCard.matrimony";
import filter_icon from "../../../Assets/TamilMatrimony/home/bi_filter.png";
import { getAllUsersApiResponse } from "../../../networkcall.service"
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

function Home() {

  const [list, setList] = useState([]);

  async function checkvalue(values) {
    console.log("filter values",values);
    // let response = await getLoginApiResponse(values);
    // if (response.status === "success") {
    //   navigate("/Matrimony/home");
    // } else {
    //   alert("check the crendentials");
    // }
  }
  
  useEffect(() => {
    console.log("document use effect");
    let mounted = true;
    getAllUsersApiResponse().then(
      (documentInfo) => {
        if (mounted) {
          setList(documentInfo.result);
          console.log("document api =>", documentInfo);
        }
      }
    );
    return () => (mounted = false);
  }, []);

  // initializing formik form
  const { handleChange, handleSubmit, handleBlur, values } =
    useFormik({
      // validationSchema: LoginSchema,
      initialValues: { height: "", weight: "", religion: "" , caste :"", martial_status:"", language:""},
      onSubmit: (values) => checkvalue(values),
    });


  var userarray = list.map((usersInfo, i) => (
    <DetailCardMatrimony
    key = {i}
    name = {usersInfo.name} 
    age = {usersInfo.age} 
    height= {usersInfo.height} 
    religion = {usersInfo.religion}
    caste = {usersInfo.caste}
    ></DetailCardMatrimony>
    ));

  // design started here
  return (
    <section>
      <HeaderMatrimony />
      <div className="matrimony_home_maincontainer">
        <div className="matrimony_home_left_container">
          <div className="matrimony_filter">
            <div className="matrimony_filter_title">
              <img className="matrimony_filter_image" src={filter_icon} alt="" />
              <div>FILTERS</div>
            </div>
            <form action="" onSubmit={handleSubmit} className="matrimony_home_filter_from_container">
            {/* <div className="matrimony_register_label_input">
                <label htmlFor="Height">Age</label>
                <div data-role="doubleslider">
                <input type="range" name="price-min" id="price-min" value="200" min="0" max="1000"/>
                <input type="range" name="price-max" id="price-max" value="800" min="0" max="1000"/>
                </div>
              </div> */}
              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Height</label>
                {/* <input
                  className="register_field"
                  type="text"
                  name="Height"
                  id="Height"
                /> */}
                <select
                    className="register_field"
                    name="height"
                    value={values.height}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // style={{ display: "block" }}
                  >
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="1" label="less than 4 ft">
                      {" "}
                      less than 4 Ft
                    </option>
                    <option value="2" label="4 ft - 5 ft">
                      4 ft - 5 ft
                    </option>
                    <option value="2" label="5 ft - 6ft">
                      5 ft - 6 ft
                    </option>
                    <option value="2" label="6 ft - 7 ft">
                      6 ft - 7 ft
                    </option>
                    <option value="2" label="greater than 7 ft">
                      greater than 7 ft
                    </option>
                  </select>
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Weight</label>
                {/* <input
                  className="register_field"
                  type="text"
                  name="Weight"
                  id="Weight"
                /> */}
                <select
                    className="register_field"
                    name="weight"
                    value={values.weight}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // style={{ display: "block" }}
                  >
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="1" label="less than 40 kgs">
                      {" "}
                      less than 40 kgs
                    </option>
                    <option value="2" label="40 kgs - 60 kgs">
                      40 kgs - 60 kgs
                    </option>
                    <option value="3" label="60 kgs - 80 kgs">
                      60 kgs - 80 kgs
                    </option>
                    <option value="4" label="80 kgs - 100 kgs">
                      80 kgs - 100 kgs
                    </option>
                    <option value="5" label="greater than 100 kgs">
                      greater than 100 kgs
                    </option>
                  </select>
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Religion</label>
                {/* <input
                  className="register_field"
                  type="text"
                  name="Religion"
                  id="Religion"
                /> */}
                <select
                    className="register_field"
                    name="religion"
                    value={values.religion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // style={{ display: "block" }}
                  >
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="1" label="Hinduism">
                      {" "}
                      Hinduism
                    </option>
                    <option value="2" label="Islam">
                      Islam
                    </option>
                    <option value="3" label="Sikhism">
                      Sikhism
                    </option>
                    <option value="4" label="Christianity">
                      Christianity
                    </option>
                    <option value="5" label="Buddhism">
                      Buddhism
                    </option>
                    <option value="6" label="Jainism">
                      Jainism
                    </option>
                    <option value="7" label="Zoroastrianism">
                      Zoroastrianism
                    </option>
                  </select>
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Caste</label>
                <input
                  className="register_field"
                  type="text"
                  name="caste"
                  id="caste"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.caste}
                />
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Martial Status</label>
                {/* <input
                  className="register_field"
                  type="text"
                  name="Martial Status"
                  id="Martial Status"
                /> */}
                <select
                    className="register_field"
                    name="martial_status"
                    value={values.martial_status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // style={{ display: "block" }}
                  >
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="1" label="Not Married">
                      {" "}
                      Not Married
                    </option>
                    <option value="2" label="Divorced">
                      Divorced
                    </option>
                  </select>
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Language</label>
                <input
                  className="register_field"
                  type="text"
                  name="language"
                  id="language"
                  value={values.language}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              {/* <div className="matrimony_register_label_input">
                <label htmlFor="Height">Education</label>
                <input
                  className="register_field"
                  type="text"
                  name="Education"
                  id="Education"
                />
                <select
                    className="register_field"
                    name="education"
                    value={values.education}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // style={{ display: "block" }}
                  >
                    <option value="" label="please select">
                      please select{" "}
                    </option>
                    <option value="1" label="less than 4 ft">
                      {" "}
                      
                    </option>
                    <option value="2" label="4 ft - 5 ft">
                      4 ft - 5 ft
                    </option>
                    <option value="2" label="5 ft - 6ft">
                      5 ft - 6 ft
                    </option>
                    <option value="2" label="6 ft - 7 ft">
                      6 ft - 7 ft
                    </option>
                    <option value="2" label="greater than 7 ft">
                      greater than 7 ft
                    </option>
                  </select>
              </div> */}

              <button className="matrimony_register_button" type="submit">
                Search
              </button>

            </form>
          </div>
        </div>
        <div className="matrimony_home_right_container">
          <div className="matrimony_list_container">
            {userarray}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
