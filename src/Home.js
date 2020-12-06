import React from 'react'
import Lottie from 'react-lottie'
import "./Home.css"
import animation from "./lottie.json";

function Home() {
    return (
        <section className="row home__wrapper">
      <div className="col-md-6 home__content">
        <video className="home__logo" autoPlay={true} loop={true} muted={true} playsInline={true}>
          <source src="https://dscwow.tech/images/logos/dsc-wow-white.webm" type="video/webm" />
        </video>

        <span className="home__date">
          <i className="fas fa-calendar-alt"></i> December 7-13, 2020
          <span className="home__separator">|</span>
          <i className="fas fa-globe"></i> Online
        </span>

        <div className="home__description">
          DSC <span style={{ fontWeight: "500" }}>Week Of Wonders</span>, aka
          DSC WOW. A weeklong event consisting of a
          <span className="home__highlight">
            {" "}
            4 days of workshops/sessions{" "}
          </span>
          and a 48 hours <span className="home__highlight"> hackathon </span>
          named{" "}
          <span
            className="home__highlight"
            style={{ fontWeight: "600", color: "#db4437" }}
          >
            CodeOffDuty
          </span>
          . But to us developers and tech enthusiasts, this is much more than
          some workshops and hackathon, it is a place where imagination meets
          the technology of tomorrow.
        </div>

        <div className="home__actions">
          <button className="secondary__btn">Get Your WOW Badge</button>

          <button className="primary__btn"  >Register</button>
        </div>
      </div>
      <div className="col-md-6 home__lottie">
        <Lottie options={{ animationData: animation, }} />
      </div>
    </section>
    )
}

export default Home
