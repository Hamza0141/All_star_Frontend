import React from 'react'
import banner from "../../assets/images/custom/banner/banner1.jpg";
import Experience from './Sections/Experience';
import bannerSecond from "../../assets/images/custom/banner/bannerSec.jpg";
import WhyChooseUs from './Sections/WhyChooseUs';

function Service() {
  return (
    <>
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
      <section className="services-section style-three">
        <div className="auto-container">
          <div className="sec-title style-two">
            <h2>Services that we offer</h2>
            <div className="text">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Performance Upgrade</h2>
                <a href="service-details.html" className="read-more">
                  read more +
                </a>
                <div className="icon">
                  <span className="flaticon-power"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Transmission Services</h2>
                <a href="service-details.html" className="read-more">
                  read more +
                </a>
                <div className="icon">
                  <span className="flaticon-gearbox"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Break Repair & Service</h2>
                <a href="service-details.html" className="read-more">
                  read more +
                </a>
                <div className="icon">
                  <span className="flaticon-brake-disc"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Engine Service & Repair</h2>
                <a href="service-details.html" className="read-more">
                  read more +
                </a>
                <div className="icon">
                  <span className="flaticon-car-engine"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Tyre & Wheels</h2>
                <a href="service-details.html" className="read-more">
                  read more +
                </a>
                <div className="icon">
                  <span className="flaticon-tire"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Denting & Painting</h2>
                <a href="service-details.html" className="read-more">
                  read more +
                </a>
                <div className="icon">
                  <span className="flaticon-spray-gun"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Air Conditioning Evac</h2>
                <a href="service-details.html" className="read-more">
                  read more +
                </a>
                <div className="icon">
                  <span className="flaticon-air-conditioning"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>General Service & Washing</h2>
                <a href="service-details.html" className="read-more">
                  read more +
                </a>
                <div className="icon">
                  <span className="flaticon-car-service"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
}

export default Service