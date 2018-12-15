import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo">Orders</div>
        <div className="btn-checkout" onClick={this.props.onCheckout}>Checkout</div>
      </div>
    );
  }
}

export default Header;
