import React from "react";
const SearchButton = ({ buttonText, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default SearchButton;
