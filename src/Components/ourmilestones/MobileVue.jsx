import React from "react";

function MobileVue({ yearRanges, activeYear, handleIndex }) {
  const handleChange = (event) => {
    // Find the index of the selected year
    const selectedIndex = yearRanges.findIndex(
      (year) => year.toString() === event.target.value
    );
    handleIndex(selectedIndex);
  };
  return (
    <div className="mobile-vue">
      <select onChange={handleChange} value={activeYear}>
        {yearRanges.map((year, index) => (
          <option className="lt" key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MobileVue;
