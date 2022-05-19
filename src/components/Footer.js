import React from "react";
const Footer = props => {
  return (
    <ul>
      {props.element.map(element => (
        <li>{element}</li>
      ))}
    </ul>
  );
};
export default Footer;
