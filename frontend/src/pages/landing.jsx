import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import mobile from "./assets/mobile.png";

function LandingPage() {
  return (
    <div className="LandingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>ConnectNow</h2>
        </div>
        <div className="navList">
          <p
            onClick={() => {
              window.location.href = "/saas";
            }}
          >
            Join as Guest
          </p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#ff9839" }}>Connect</span> with your loved
            ones
          </h1>
          <p>Cover a distance by ConnectNow</p>
          <div role="button">
            {/* <button>Get Started</button> */}
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src={mobile} alt="Mobile" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
