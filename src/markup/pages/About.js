import React from 'react'
import bannerSecond from "../../assets/images/custom/banner/banner2.jpg";
import leftAbout from "../../assets/images/custom/banner/aboutFirst.jpg";
import Experience from './Sections/Experience';
import WhyChooseUs from './Sections/WhyChooseUs';
import banner from "../../assets/images/custom/banner/banner1.jpg";
import Appointment from './Sections/Appointment';

function About() {
  return (
    <>
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
            Tuneup Your Car <br /> to Next Level
          </h2>
        </div>
      </section>
      <section className="about-section-three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-7">
              <div className="content">
                <h2>
                  We are highly skilled mechanics <br /> for your car repair
                </h2>
                <div className="text">
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring.
                  </p>
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information heading towards a
                    streamlined cloud solution. User generated content in
                    real-time will have multiple.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image">
                <img src={leftAbout} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Experience />
      <WhyChooseUs />
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
          <h2 style={{ color: "#1365b7cf" }}>
            Tuneup Your Car <br /> to Next Level
          </h2>
        </div>
      </section>
      <Appointment />
    </>
  );
}

export default About