import React from 'react'
import bannerSecond from "../../assets/images/custom/banner/bannerSec.jpg";

function Contact() {
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

      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Drop us message</h2>
            <div className="text">
              Praising pain was born and I will give you a complete account of
              the system, and{" "}
            </div>
          </div>
          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-7">
              <div className="inner-column">
                {/* Contact Form */}
                <div className="contact-form">
                  <form method="post" action="sendemail.php" id="contact-form">
                    <div className="row clearfix">
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="form_name"
                          value=""
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="email"
                          value=""
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="form_subject"
                          value=""
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          name="form_message"
                          placeholder="Massage"
                        ></textarea>
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          id="form_botcheck"
                          name="form_botcheck"
                          className="form-control"
                          type="hidden"
                          value=""
                        />
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>Submit now</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Contact Form */}
              </div>
            </div>
            {/* Info Column */}
            <div className="info-column col-lg-5">
              <div className="inner-column">
                <h4>Our Address</h4>
                <div className="text">
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service.
                </div>
                <ul>
                  <li>
                    <i className="flaticon-pin"></i>
                    <span>Address:</span> 54B, Tailstoi Town 5238 MT, La city,
                    IA 5224
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <span>email:</span> contact@buildtruck.com
                  </li>
                  <li>
                    <i className="flaticon-phone"></i>
                    <span>phone:</span> 1800 456 7890 / 1254 897 3654
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact