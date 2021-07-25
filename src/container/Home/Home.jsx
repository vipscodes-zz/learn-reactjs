import React, { Component } from "react";
import YouTubeComp from "../../components/YouTubeComponent/YouTubeComp";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

class Home extends Component {
  state = {
    showComponent: true,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 5000);
  }
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
        <p>LifeCycleComp</p>
        <hr />
        {this.state.showComponent ? <LifeCycleComp /> : null}
      </div>
    );
  }
}

YouTubeComp.defaultProps = {};

export default Home;
