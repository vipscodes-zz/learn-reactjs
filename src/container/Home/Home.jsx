import React, { Component } from "react";
import YouTubeComp from "../../components/YouTubeComponent/YouTubeComp";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <div>
        <p>YouTube Component</p>
        <hr />
        <YouTubeComp title="Discord Bot" desc="Series pertama" />
        <YouTubeComp title="Discord Bot 2" desc="Series kedua" />
        <YouTubeComp />

        <p>counter</p>
        <hr />
        <Product />
      </div>
    );
  }
}

YouTubeComp.defaultProps = {};

export default Home;
