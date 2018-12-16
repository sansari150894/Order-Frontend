import React, { Component } from "react";
import Header from "./Header";
import Pacakage from './Package';
import "../App.css";
import { createPackage } from '../utils.js';




class PackageListing extends Component {
  render() {
    let packages = createPackage(this.props.selectedItems);
    return (
      <div className="main-container">
        <Header showCheckout={false} />
        <div className="order-container">
        {
          packages.length ? <div>
          {
            packages.length && packages.map((pacakage, index) => {
              return <Pacakage pacakage={pacakage} key={index} index={index}/>
          })}
          </div>: <div style={{marginTop:"20px"}}>Nothing to show</div>
        }
        </div>
      </div>
    );
  }
}

export default PackageListing;
