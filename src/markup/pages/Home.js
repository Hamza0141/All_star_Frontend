import React from 'react';
import banner from '../../assets/images/custom/banner/banner1.jpg'
import bannerSecond from "../../assets/images/custom/banner/bannerSec.jpg";
import Experience from './Sections/Experience';
import ServiceSection from './Sections/ServiceSection';
import Features from './Sections/Features';
import WhyChooseUs from './Sections/WhyChooseUs';
import Appointment from './Sections/Appointment';
function Home(props) {
  return (
    <>
      <div class="page-wrapper">
        <section className="video-section">
          <div
            data-parallax={{ y: 50 }}
            className="sec-bg"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          ></div>
          <div className="auto-container">
            <h5>Working since 1999</h5>
            <h2>
              Tuneup Your Car <br /> to Next Level
            </h2>
          </div>
        </section>
        <Experience />
        <ServiceSection />
        <Features />
        <WhyChooseUs />

        <section className="video-section">
          <div
            data-parallax={{ y: 50 }}
            className="sec-bg"
            style={{
              backgroundImage: `url(${bannerSecond})`,
            }}
          ></div>
          <div className="auto-container">
            <h5>Working since 1999</h5>
            <h2 style={{ color: "#1365b7cf" }}>
              We are a leader <br /> in Car Mechanical Work
            </h2>
          </div>
        </section>
        <Appointment />
      </div>
    </>
  );
}

export default Home;