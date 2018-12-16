import React, { Component } from "react";
import Header from "./Header";
import Pacakage from './Package';
import "../App.css";
import { createPackage } from '../utils.js';




class PackageListing extends Component {
  render() {
    return (
      <div className="main-container">
        <Header showCheckout={false} />
        <div className="order-container">
          {
            createPackage(this.props.selectedItems).map((pacakage, index) => {
              return <Pacakage pacakage={pacakage} key={index} index={index}/>
          })}
        </div>
      </div>
    );
  }
}

export default PackageListing;
