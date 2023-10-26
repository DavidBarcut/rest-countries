import React from "react";

const flag = ({ url, title }) => (
  <div>
    <img src={url} alt={title} />
  </div>
);
//this gets the image of the countries flag from the website 
export default flag;