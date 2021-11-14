import React from 'react'
import Image from '../static/hello.png'
import './css/HeroSection.css'
import { Link } from 'react-router-dom'
import hlo from '../static/logo.png'
const HeroSection = () => {
    return (
        <>
        <div className="main">
          <div className="heroflex">
            <div className="textflex">
              <img src={hlo} alt="" className="hlo"/>
              <p>hyperLocalization and More!</p>
              <div className="buttons">
                <a href="https://app.flytnow.com/app/dashboard/"  rel="noreferrer" target="_blank">
                    <button className="btn-download">TRY IT</button>
                </a>
                <a href="https://core-dev.notion.site/FarmX-Farm-Surveillance-Drone-e50ce99298ea4516937ff316a09f3b2c">Learn More <span><i class="fas fa-arrow-right"></i></span></a>
              </div>
            </div>
            <div className="image">
              <img src={Image} alt="mockup" />
            </div>
          </div>
          </div>
        </>
    )
}

export default HeroSection
