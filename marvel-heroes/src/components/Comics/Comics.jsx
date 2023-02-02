import React from "react";

const Comics = ({ title, img }) => {
  return (
    <div className="singleComic col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-sm-6">
      {/* {title} */}
      <img src={img} alt="" />
    </div>
  );
};

export default Comics;
