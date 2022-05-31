import "./home.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
import DetailCardMatrimony from "../../../components/TamilMatrimony/DetailCard/detailCard.matrimony";
import filter_icon from "../../../Assets/TamilMatrimony/home/bi_filter.png";
import close_icon from "../../../Assets/TamilMatrimony/home/close.png";
import { getAllUsersApiResponse } from "../../../networkcall.service";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import MultiRangeSlider from "../../../components/TamilMatrimony/MultiRangeSlider/multiRangeSlider";
import ViewPopup from "../../../components/TamilMatrimony/popups/view.popup";

// import { useSelector } from "react-redux";

function Home() {
  // const { setViewPopup } = useSelector((state) => state.userReducer);

  const [list, setList] = useState([]);
  const [viewPopup, setViewPopup] = useState(false);

  async function checkvalue(values) {
    var a = {
      min_age: values.min_age.toString(),
      max_age: values.max_age.toString(),
      min_height: values.height.split("-")[0],
      max_height: values.height.split("-")[1],
      min_weight: values.weight.split("-")[0],
      max_weight: values.weight.split("-")[1],
      religion: values.religion,
      caste: values.caste,
      martial_status: values.martial_status,
      language: values.language,
    };
    console.log("filter values", a);
    const response = await getAllUsersApiResponse(a);
    if (response.status === "success") {
      // setList(response.result);
      console.log("document api after filter =>", response.result);
      setList(response.result);
      document.getElementById("filter").style.width = "0%";
      document.getElementById("list_users").style.width = "100%";
      document.getElementById("float_button").style.display = "block"

    }
    // else {
    //   alert("check the crendentials");
    // }
  }

  useEffect(() => {
    console.log("document use effect");
    let mounted = true;
    getAllUsersApiResponse({
      min_age: "18",
      max_age: "100",
      min_height: "",
      max_height: "",
      min_weight: "",
      max_weight: "",
      religion: "",
      height: "",
      weight: "",
      caste: "",
      martial_status: "",
      language: "",
    }).then((documentInfo) => {
      if (mounted) {
        setList(documentInfo.result);
        console.log("document api =>", documentInfo);
      }
    });
    return () => (mounted = false);
  }, []);

  // initializing formik form
  const { handleChange, handleSubmit, handleBlur, values } = useFormik({
    // validationSchema: LoginSchema,
    initialValues: {
      min_age: "18",
      max_age: "100",
      min_height: "",
      max_height: "",
      min_weight: "",
      max_weight: "",
      height: "",
      religion: "",
      weight: "",
      caste: "",
      martial_status: "",
      language: "",
    },
    onSubmit: (values) => checkvalue(values),
  });

  function openmobilefilter(){
    // console.log("filter clicked");
    // setViewPopup(true);
    document.getElementById("filter").style.width = "100%";
    document.getElementById("list_users").style.width = "0%";
    document.getElementById("float_button").style.display = "none"
  };

  function closemobilefilter(){
    // console.log("filter clicked");
    // setViewPopup(true);
    document.getElementById("filter").style.width = "0%";
    document.getElementById("list_users").style.width = "100%";
    // document.getElementById("float_button").style.display = "block"
  };

  var userarray = list.map((usersInfo, i) => (
    <DetailCardMatrimony
      key={i}
      name={usersInfo.name}
      age={usersInfo.age}
      height={usersInfo.height}
      religion={usersInfo.religion}
      caste={usersInfo.caste}
      profile_pic={usersInfo.profile_pic}
      gender={convert_gender(usersInfo.gender)}
    ></DetailCardMatrimony>
  ));

  function convert_gender(num) {
    switch (num) {
      case "1":
        return "Groom";
      case "2":
        return "Bride";
      default:
        return "day not found";
    }
  }

  // design started here
  return (
    <section>
      <HeaderMatrimony />
      <div className="matrimony_home_maincontainer">
        <div className="matrimony_home_left_container" id="filter">
          <div className="matrimony_filter">
            <div className="matrimony_filter_title">
              <img
                className="matrimony_filter_image"
                src={filter_icon}
                alt=""
              />
              <div>FILTERS</div>
            </div>
            <form
              action=""
              onSubmit={handleSubmit}
              className="matrimony_home_filter_from_container"
            >
             
              <div className="matrimony_register_label_input">
                <label htmlFor="Age">AGE</label>
                <MultiRangeSlider
                  min={18}
                  max={100}
                  onChange={({ min, max }) => {
                    values.min_age = min;
                    values.max_age = max;
                  }}
                />
              </div>
              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Height</label>
                
                <select
                  className="register_field"
                  name="height"
                  id="Height"
                  value={values.height}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  
                >
                  <option value="" label="please select">
                    please select{" "}
                  </option>
                  <option value="0-4" label="less than 4 ft">
                    {" "}
                    less than 4 Ft
                  </option>
                  <option value="4-5" label="4 ft - 5 ft">
                    4 ft - 5 ft
                  </option>
                  <option value="5-6" label="5 ft - 6ft">
                    5 ft - 6 ft
                  </option>
                  <option value="6-7" label="6 ft - 7 ft">
                    6 ft - 7 ft
                  </option>
                  <option value="7-10" label="greater than 7 ft">
                    greater than 7 ft
                  </option>
                </select>
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Weight">Weight</label>
                <select
                  className="register_field"
                  name="weight"
                  id="Weight"
                  value={values.weight}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" label="please select">
                    please select{" "}
                  </option>
                  <option value="0-40" label="less than 40 kgs">
                    {" "}
                    less than 40 kgs
                  </option>
                  <option value="40-60" label="40 kgs - 60 kgs">
                    40 kgs - 60 kgs
                  </option>
                  <option value="60-80" label="60 kgs - 80 kgs">
                    60 kgs - 80 kgs
                  </option>
                  <option value="80-100" label="80 kgs - 100 kgs">
                    80 kgs - 100 kgs
                  </option>
                  <option value="100-200" label="greater than 100 kgs">
                    greater than 100 kgs
                  </option>
                </select>
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Religion">Religion</label>
                <select
                  className="register_field"
                  name="religion"
                  id="Religion"
                  value={values.religion}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                <label htmlFor="Caste">Caste</label>
                <input
                  className="register_field"
                  type="text"
                  name="caste"
                  id="Caste"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.caste}
                />
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="MaritialStatus">Martial Status</label>
                <select
                  className="register_field"
                  name="martial_status"
                  id="MartialStatus"
                  value={values.martial_status}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                <label htmlFor="Language">Language</label>
                <input
                  className="register_field"
                  type="text"
                  name="language"
                  id="Language"
                  value={values.language}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <button className="matrimony_register_button" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="matrimony_home_right_container" id="list_users">
          <div className="matrimony_list_container">{userarray}</div>
          {/* <ViewPopup /> */}
        </div>
      </div>

      <div className="matrimony_float_button" id="float_button" onClick={openmobilefilter}>
        <img className="matrimony_filter_image" src={filter_icon} alt="" />
      </div>

      {/* <div className="matrimony_float_button" onClick={closemobilefilter}>
        <img className="matrimony_filter_image" src={close_icon} alt="" />
      </div> */}

    </section>
  );
}

export default Home;
