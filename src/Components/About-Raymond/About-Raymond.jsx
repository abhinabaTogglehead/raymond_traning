import React from "react";
import "./AboutRaymond.scss";
function AboutRaymond() {
  return (
    <div className="about">
      <div>
        <h2>HOME | OUR COMPANY | ABOUT US</h2>
        <h3>About Raymond</h3>
        <article>
          Raymond is a diversified group with majority business interests in
          Textile & Apparel sectors and a presence across varying segments such
          as Consumer Care, Realty and Engineering in national and international
          markets.
        </article>
      </div>
      <div className="image-container">
        <img
          src="https://www.raymond.in/static/media/new-banner.a353b7965ec68f67a488.jpg"
          alt="About Raymond logo"
        />
      </div>
    </div>
  );
}

export default AboutRaymond;
