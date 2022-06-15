import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jaime Diaz</div>
            <div className="brief_description">
              Hello my name is Jaime Diaz, I am shfohsdkjfhsfa rising thrd year at RIT majoring in Software Engineering interning
              at Atlas Air this summer. I enjoy going on hikes with my two dogs and working on my car.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
