// import { setUserDetails } from "./store/actions";
// import { Store } from "./store/store";
// const baseurl = "http://127.0.0.1:5000/user";
// import { randomAlphanumericGenerator } from "./helper/utils";
// const baseurl = "http://3.111.40.230:5000";
const baseurl = "http://localhost:5000";

// login API CALL
export const getLoginApiResponse = async (values) => {
  try {
    console.log("inside document api", values);
    let url = `${baseurl}/user/login`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        phone: values.phone,
        password: values.password,
      }),
    };
    let response = await fetch(url, requestOptions);
    console.log("url=>", url);
    let responseJson = await response.json();
    console.log("from network =>", responseJson);
    return responseJson;
  } catch (error) {
    alert(error);
  }
};

// list users API CALL
export const getAllUsersApiResponse = async (values) => {
  try {
    console.log("inside document api", values);
    let url = `${baseurl}/user/listusers`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        // userId: sessionStorage.getItem("user_id"),
        max_age: values.max_age,
        min_age: values.min_age,
        min_height: values.min_height,
        max_height: values.max_height,
        min_weight: values.min_weight,
        max_weight: values.max_weight,
        religion: convertReligion(values.religion),
        caste: values.caste,
        martial_status: values.martial_status,
        language: values.language,
      }),
    };

    console.log("yupp", {
      max_age: values.max_age,
      min_age: values.min_age,
      min_height: values.min_height,
      max_height: values.max_height ?? "",
      min_weight: values.min_weight,
      max_weight: values.max_weight ?? "",
      religion: convertReligion(values.religion),
      caste: values.caste,
      martial_status: values.martial_status,
      language: values.language,
    });

    function convertReligion(religion) {
      switch (religion) {
        case "":
          return "";
        case "1":
          return "hindu";
        case "2":
          return "Muslim";
        case "3":
          return "Sikhism";
        case "4":
          return "Christianity";
        case "5":
          return "Buddhism";
        case "6":
          return "Jainism";
        case "7":
          return "Zoroastrianism";
        default:
          break;
      }
    }
    let response = await fetch(url, requestOptions);
    console.log("url=>", url);
    let responseJson = await response.json();
    console.log("from network =>", responseJson);
    return responseJson;
  } catch (error) {
    alert(error);
  }
};

// register api call
export const getRegisterApiResponse = async (values) => {
  try {
    console.log("inside document api", values);
    let url = `${baseurl}/user/create`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: sessionStorage.getItem("user_id"),
        name: values.name,
        dob: values.dob,
        age: values.age,
        gender: values.gender,
        pet: values.pet,
        weight: values.weight,
        height: values.height,
        caste: values.caste,
        religion: values.religion,
        food_habit: values.food_habit,
        smoke: values.smoke,
        drink: values.drink,
        hobbies: values.hobbies,
        looking_for: values.looking_for,
        fathers_name: values.fathers_name,
        fathers_occupation: values.fathers_occupation,
        mothers_name: values.mothers_name,
        mothers_occupation: values.mothers_occupation,
        fathers_native_place: values.fathers_native_place,
        mothers_native_place: values.mothers_native_place,
        number_of_sibiling: values.number_of_sibiling,
        family_property: values.family_property,
        other_info: values.other_info,
        expectation: values.expectation,
        phone_no: values.phone_no,
        pin_code: values.pin_code,
        password: values.password,
        city: values.city,
        address: values.address,
        academic_qualification: values.academic_qualification,
        last_studied_institution: values.last_studied_institution,
        company_name: values.company_name,
        location: values.location,
        profession: values.profession,
        monthly_net_income: values.monthly_net_income,
        liabilities: values.liabilities,
        annual_gross_income: values.annual_gross_income,
        physical_status: values.physical_status,
        diet: values.diet,
        body_type: values.body_type,
        complexion: values.complexion,
        profile_pic: values.profile_pic,
        heroscope: values.heroscope,
      }),
    };
    let response = await fetch(url, requestOptions);
    console.log("url=>", url);
    let responseJson = await response.json();
    console.log("from network =>", responseJson);
    return responseJson;
  } catch (error) {
    alert(error);
  }
};

// user details API
export const getUserDetailsApiResponse = async (user_id) => {
  try {
    console.log("inside document api", sessionStorage.getItem("user_id"));
    console.log("type", typeof sessionStorage.getItem("user_id"));
    let url = `${baseurl}/user/details`;
    var raw = JSON.stringify({
      userId : user_id
    });
    const requestOptions = {
      method: "POST",
      body: raw,
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow"
    };
    return new Promise((resolve, reject) => {
      fetch(url, requestOptions)
        .then((res) => res.text())
        .then((data) => {
          console.log("from network", JSON.parse(data));
          const json_data = JSON.parse(data);
          // Store.dispatch(setUserDetails(json_data.result));
          resolve(json_data);
        });
    });
  } catch (error) {
    alert(error);
  }
};

// Initiate Payment Api
export const initiatePaymentApiResponse = async (value) => {
  try {
    let url = `${baseurl}/pay/initiatePayment`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "123",
        amount: value.amount * 100,
        mateUserId: value.mateUserId,
        name: value.name,
        phone: value.phone,
        currency: "INR",
        // email: value.email,
      }),
    };
    let response = await fetch(url, requestOptions);
    console.log("url=>", url);
    let responseJson = await response.json();
    console.log("from network =>", responseJson);
    return responseJson;
  } catch (error) {
    alert(error);
  }
};

export const verifyPaymentApiResponse = async (value) => {
  try {
    let url = `${baseurl}/pay/validatePayment`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    };
    let response = await fetch(url, requestOptions);
    console.log("url=>", url);
    let responseJson = await response.json();
    console.log("from network =>", responseJson);
    return responseJson;
  } catch (error) {
    alert(error);
  }
};

//send otp
export const sendOTPApiResponse = async (value) => {
  try {
    let url = `${baseurl}/otp/sendOTP`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: value.phone,
      }),
    };
    let response = await fetch(url, requestOptions);
    console.log("url=>", url);
    let responseJson = await response.json();
    console.log("from network =>", responseJson);
    return responseJson;
  } catch (error) {
    alert(error);
  }
};
//verify otp
export const verifyOTPApiResponse = async (value) => {
  try {
    let url = `${baseurl}/otp/verifyOTP`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: value.phone,
        otp: value.otp,
      }),
    };
    let response = await fetch(url, requestOptions);
    console.log("url=>", url);
    let responseJson = await response.json();
    console.log("from network =>", responseJson);
    return responseJson;
  } catch (error) {
    alert(error);
  }
};

// module.exports = {
//   getLoginApiResponse,
//   getAllUsersApiResponse,
//   getRegisterApiResponse,
//   getUserDetailsApiResponse
// };
