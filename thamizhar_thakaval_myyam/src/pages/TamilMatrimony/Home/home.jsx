import "./home.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
import DetailCardMatrimony from "../../../components/TamilMatrimony/DetailCard/detailCard.matrimony";
import filter_icon from "../../../Assets/TamilMatrimony/home/bi_filter.png";
import { getAllUsersApiResponse } from "../../../networkcall.service"
import React, { useState, useEffect } from "react";

function Home() {

  const [list, setList] = useState([]);
  
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
            <form action="" className="matrimony_home_filter_from_container">
              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Height</label>
                <input
                  className="register_field"
                  type="text"
                  name="Height"
                  id="Height"
                />
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Weight</label>
                <input
                  className="register_field"
                  type="text"
                  name="Weight"
                  id="Weight"
                />
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Religion</label>
                <input
                  className="register_field"
                  type="text"
                  name="Religion"
                  id="Religion"
                />
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Caste</label>
                <input
                  className="register_field"
                  type="text"
                  name="Caste"
                  id="Caste"
                />
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Martial Status</label>
                <input
                  className="register_field"
                  type="text"
                  name="Martial Status"
                  id="Martial Status"
                />
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Language</label>
                <input
                  className="register_field"
                  type="text"
                  name="Language"
                  id="Language"
                />
              </div>

              <div className="matrimony_register_label_input">
                <label htmlFor="Height">Education</label>
                <input
                  className="register_field"
                  type="text"
                  name="Education"
                  id="Education"
                />
              </div>

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
