import React from "react";

const Comics = ({ title, img }) => {
  return (
    <div id="comics">
      {/* {title} */}
      <img src={img} alt="" />
    </div>
  );
};

export default Comics;
