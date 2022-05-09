import "./details.css";
import HeaderMatrimony from "../../../components/TamilMatrimony/Header/header.matrimony";
import bride from "../../../Assets/TamilMatrimony/home/bride.jpeg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUserDetailsApiResponse } from "../../../networkcall.service"

function Details() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  
  useEffect(() => {
    console.log("document use effect");
    let mounted = true;
    getUserDetailsApiResponse().then(
      (documentInfo) => {
        if (mounted) {
          setList(documentInfo.result[0]);
          console.log("document api =>", documentInfo.result[0].name);
        }
      }
    );
    return () => (mounted = false);
  }, []);

  const onclickView = () => {
    navigate('/Matrimony/register');
  }
  
  // design started here
  return (
    <section className="matrimony_details_main_container">
      <HeaderMatrimony />
      <div className="matrimony_detail_secondary_container">
        <div className="matrimony_detail_left">
          <div className="matrimony_detail_left_box">
            <div className="matrimony_detail_left_box_upper">
              <img className="matrimony_detail_card_image" src={bride} alt="" />
              <div className="matrimony_details_card_title">{list.name}</div>
            </div>
            <div className="matrimony_detail_left_box_middle">
              <ul>
                <li>{list.age} yrs old</li>
                <li>{list.weight}kg & {list.height}’ft</li>
                <li>{list.religion}</li>
                <li>{list.academic_qualification}</li>
                <li>{list.profession}</li>
                <li>Rs {list.annual_gross_income}</li>
              </ul>
            </div>
            <div className="matrimony_detail_left_box_lower">
              <button className="matrimony_detail_card_button1">
                Verify Profile
              </button>
              <button className="matrimony_detail_card_button2" onClick={onclickView}>Edit</button>
            </div>
          </div>
        </div>
        <div className="matrimony_detail_right">
          <div className="matrimony_detail_right_main">

            <div className="matrimony_detail_right_secondary_container">
              <div className="matrimony_detail_title">Personal Details</div>
              <div className="matrimony_details_container_warp">

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Name</div>
                  <div className="matrimony_detail_field_value">{list.name}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">DOB</div>
                  <div className="matrimony_detail_field_value">{list.dob}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Age</div>
                  <div className="matrimony_detail_field_value">{list.age}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Weight</div>
                  <div className="matrimony_detail_field_value">{list.weight} kg</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Height</div>
                  <div className="matrimony_detail_field_value">{list.height} cm</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Caste</div>
                  <div className="matrimony_detail_field_value">{list.caste}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Religion</div>
                  <div className="matrimony_detail_field_value">{list.religion}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Food Habit</div>
                  <div className="matrimony_detail_field_value">{list.food_habit}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Smoke</div>
                  <div className="matrimony_detail_field_value">{list.smoke}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Drink</div>
                  <div className="matrimony_detail_field_value">{list.drink}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Hobbies</div>
                  <div className="matrimony_detail_field_value">{list.hobbies}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Looking For</div>
                  <div className="matrimony_detail_field_value">{list.looking_for}</div>
                </div>

              </div>
            </div>


            <div className="matrimony_detail_right_secondary_container">
              <div className="matrimony_detail_title">Family Details</div>
              <div className="matrimony_details_container_warp">

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Father’s Name</div>
                  <div className="matrimony_detail_field_value">{list.fathers_name}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Fathers Occupation</div>
                  <div className="matrimony_detail_field_value">{list.fathers_occupation}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Mothers Name</div>
                  <div className="matrimony_detail_field_value"> {list.mothers_name}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Mothers occupation</div>
                  <div className="matrimony_detail_field_value">{list.mothers_occupation}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Father's Native Place</div>
                  <div className="matrimony_detail_field_value">{list.fathers_native_place}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Mother's Native Place</div>
                  <div className="matrimony_detail_field_value">{list.mothers_native_place}</div>
                </div>

              </div>
            </div>


            <div className="matrimony_detail_right_secondary_container">
              <div className="matrimony_detail_title">Contact Details</div>
              <div className="matrimony_details_container_warp">

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Contact Number</div>
                  <div className="matrimony_detail_field_value">{list.phone_no}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">City</div>
                  <div className="matrimony_detail_field_value">{list.city}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Pincode</div>
                  <div className="matrimony_detail_field_value">{list.pin_code}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Address</div>
                  <div className="matrimony_detail_field_value">{list.address}</div>
                </div>

                
              </div>
            </div>


            <div className="matrimony_detail_right_secondary_container">
              <div className="matrimony_detail_title">Education & Career Details</div>
              <div className="matrimony_details_container_warp">

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Acedemic Qualification</div>
                  <div className="matrimony_detail_field_value">{list.academic_qualification}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Last Studied Institution</div>
                  <div className="matrimony_detail_field_value">{list.last_studied_institution}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Company Name</div>
                  <div className="matrimony_detail_field_value"> {list.company_name} </div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Location</div>
                  <div className="matrimony_detail_field_value">{list.location}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Profession</div>
                  <div className="matrimony_detail_field_value">{list.profession}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Monthly Net Income</div>
                  <div className="matrimony_detail_field_value">{list.monthly_net_income}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Liabilities (optional)</div>
                  <div className="matrimony_detail_field_value">{list.liabilities}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Annual Gross Income</div>
                  <div className="matrimony_detail_field_value">{list.annual_gross_income}</div>
                </div>


              </div>
            </div>


            <div className="matrimony_detail_right_secondary_container">
              <div className="matrimony_detail_title">Lifestyle & Appearance Details</div>
              <div className="matrimony_details_container_warp">

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Physical Status</div>
                  <div className="matrimony_detail_field_value">{list.physical_status}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Diet</div>
                  <div className="matrimony_detail_field_value">{list.diet}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Body Type</div>
                  <div className="matrimony_detail_field_value">{list.body_type}</div>
                </div>

                <div className="matrimony_details_warp">
                  <div className="matrimony_detail_field_title">Complexion</div>
                  <div className="matrimony_detail_field_value">{list.complexion}</div>
                </div>

                
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
