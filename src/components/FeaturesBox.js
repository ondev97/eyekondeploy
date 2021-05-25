import React from "react";

export default function FeaturesBox({ image, heading, para }) {
  return (
    <>
      <div className="outer-box">
        <div className="small-box">
          <img src={image} alt="image" />
        </div>
        <div className="length-box">
          <h1>{heading}</h1>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
}
