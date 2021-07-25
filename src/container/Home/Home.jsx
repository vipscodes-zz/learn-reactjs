import React, { Component } from "react";
import YouTubeComp from "../../components/YouTubeComponent/YouTubeComp";

class Home extends Component {
  render() {
    return (
      <div>
        <p>YouTube Component</p>
        <hr />
        <YouTubeComp title="Discord Bot" desc="Series pertama" />
        <YouTubeComp title="Discord Bot 2" desc="Series kedua" />
        <YouTubeComp />
      </div>
    );
  }
}

YouTubeComp.defaultProps = {};

export default Home;
