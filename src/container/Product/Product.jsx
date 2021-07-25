import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 4,
    name: "Discord bot",
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">Total : </div>
          <div className="cart">
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
