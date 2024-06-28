import React from "react";

function Team() {
  return (
    <section className="team spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Our Team</span>
              <h2>Meet Our Team</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item">
              <img src="img/about/team-1.jpg" alt />
              <h4>John Smith</h4>
              <span>Fashion Design</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item">
              <img src="img/about/team-2.jpg" alt />
              <h4>Christine Wise</h4>
              <span>C.E.O</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item">
              <img src="img/about/team-3.jpg" alt />
              <h4>Sean Robbins</h4>
              <span>Manager</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item">
              <img src="img/about/team-4.jpg" alt />
              <h4>Lucy Myers</h4>
              <span>Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
