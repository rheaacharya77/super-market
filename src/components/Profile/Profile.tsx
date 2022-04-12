import React, { useState, useEffect } from "react";
// import {
//   faMailBulk,
//   faPhoneAlt,
//   faGift,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Card, Spinner, Container } from "react-bootstrap";
// import { ProfileInterface } from "../../types/profile";
import '../../assets/style/profile.css'

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";

const Profile = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [profile, setProfile] = useState<any>([]);

  const getProfile = async () => {
    let response = await fetch(`${baseURL}/api/v4/profile/show`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Api-key": apiKey,
      },
    });
    let newData = await response.json();
    if (response.status === 200) {
      setProfile(newData.data);
      console.log(newData.data);
    }
  };

  useEffect(() => {
    try {
      getProfile();
    } catch (err) {
      console.log(err);
    }
  },[]);

  return(
<div className="container mt-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-7">
            <div className="card p-3 py-4">
                <div className="text-center"> <img src={profile.image} width="100" alt="" className="rounded-circle"/> </div>
                <div className="text-center mt-3"> <span className="bg-secondary p-1 px-4 rounded text-white">Verified</span>
                    <h5 className="mt-2 mb-0">{profile.firstName}<span>{profile.lastName}</span></h5> 
                    <div className="px-4 mt-1">
                        <p className="fonts"><h6>{profile.email} </h6></p>
                        <p className="fonts"><h6>{profile.mobileNumber}</h6> </p>
                    </div>
                    <div className="buttons"> <button className="btn btn-outline-primary px-4">Edit Profile</button> <button className="btn btn-primary px-4 ms-3">Change password</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};
export default Profile;
