import React from "react";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  title: "Title here",
  desc: "Desc here",
};

export default YouTubeComp;
