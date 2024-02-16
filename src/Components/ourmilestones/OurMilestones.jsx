import React from "react";
import "./OurMilestones.scss";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionOne from "./SectionOne";
import { Ourmilestonesimg1 } from "../Image";

function OurMilestones() {
  const yearRanges = [
    "1925 - 1999",
    "2000 - 2010",
    "2010 - 2017",
    "2018 - 2020",
  ];
  const [activeYear, setActiveYear] = React.useState([
    true,
    false,
    false,
    false,
  ]);
  const sections = [
    <SectionOne />,
    <SectionTwo />,
    <SectionThree />,
    <SectionFour />,
  ];

  const handleIndex = (index) => {
    const updatedYears = activeYear.map((_, idx) => idx === index);
    setActiveYear(updatedYears);
  };

  return (
    <div className="our-milestones">
      <h2>OUR MILESTONES</h2>
      <div className="year-container">
        {yearRanges.map((range, index) => (
          <React.Fragment key={index}>
            <div
              className={`year ${activeYear[index] ? "active" : ""}`}
              onClick={() => handleIndex(index)}
            >
              {range}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="section-container">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {activeYear[index] && section}
          </React.Fragment>
        ))}
        <img className="our-milestone-image" src={Ourmilestonesimg1} alt="aour image" />
      </div>
    </div>
  );
}

export default OurMilestones;
