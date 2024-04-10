import React from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <section className="services-section style-three">
      <div className="auto-container">
        <div className="sec-title style-two">
          <h2>Dashboard</h2>
          <div className="text">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <Link to="/admin/orders">
                <h2>All Orders</h2>
              </Link>

              <div className="icon">
                <span className="flaticon-power"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <Link to="/admin/order">
                <h2>New Orders</h2>
              </Link>

              <div className="icon">
                <span className="flaticon-gearbox"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <Link to="/admin/employees">
                <h2>Employee</h2>
              </Link>

              <div className="icon">
                <span className="flaticon-brake-disc"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h2>Engine Service & Repair</h2>
              <div className="icon">
                <span className="flaticon-car-engine"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h2>Tyre & Wheels</h2>
              <div className="icon">
                <span className="flaticon-tire"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h2>Denting & Painting</h2>

              <div className="icon">
                <span className="flaticon-spray-gun"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h2>Air Conditioning Evac</h2>

              <div className="icon">
                <span className="flaticon-air-conditioning"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h2>General Service & Washing</h2>

              <div className="icon">
                <span className="flaticon-car-service"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard