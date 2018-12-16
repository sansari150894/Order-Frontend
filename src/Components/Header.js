import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo">Orders</div>
        {
          this.props.showCheckout && 
            <Link to={'/order-detail'}><div className="btn-checkout" onClick={this.props.onCheckout}>Checkout</div></Link>}
      </div>
    );
  }
}

export default Header;
