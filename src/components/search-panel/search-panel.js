import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
  const searchText = "search";
  // const searchStyle = {
  //   fontSize: "25px",
  // };
  return (
    // <input placeholder={searchText} style={searchStyle} data-columns={123} />
    <input className="search-input" placeholder={searchText} />
  );
};

export default SearchPanel;
