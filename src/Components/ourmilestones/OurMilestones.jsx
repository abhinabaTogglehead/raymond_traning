import React, { useEffect, useState } from "react";
import "./OurMilestones.scss";
// Import other components and assets as before
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import MobileVue from "./MobileVue";
import { Ourmilestonesimg1 } from "../Image";
function OurMilestones() {
  const yearRanges = [
    "1925 - 1999",
    "2000 - 2010",
    "2010 - 2017",
    "2018 - 2020",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeYear, setActiveYear] = useState([true, false, false, false]);
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

  // Check window width to toggle menu
  const checkWidth = () => {
    setIsMenuOpen(window.innerWidth <= 734);
  };

  useEffect(() => {
    checkWidth(); // Check on mount
    window.addEventListener("resize", checkWidth); // Add resize listener

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", checkWidth);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="our-milestones">
      <h2>OUR MILESTONES</h2>
      <div className="year-container">
        {isMenuOpen ? (
          <MobileVue
            activeYear={activeYear}
            yearRanges={yearRanges}
            handleIndex={handleIndex}
          />
        ) : (
          yearRanges.map((range, index) => (
            <React.Fragment key={index}>
              <div
                className={`year ${activeYear[index] ? "active" : ""}`}
                onClick={() => handleIndex(index)}
              >
                {range}
                <div
                  className={`underline ${activeYear[index] ? "active" : ""}`}
                ></div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
      <div className="section-container">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {activeYear[index] && section}
          </React.Fragment>
        ))}
        <img
          className="our-milestone-image"
          src={Ourmilestonesimg1}
          alt="our milestones"
        />
      </div>
    </div>
  );
}

export default OurMilestones;
