import React from "react";
import "./Comics.scss"

const Comics = ({ title, img }) => {
  return (
    <div className="singleComic col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 p-1">
      {/* {title} */}
      <img src={img} alt="" />
    </div>
  );
};

export default Comics;
