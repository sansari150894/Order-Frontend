import React, { Component } from "react";
import { getCourierPrice } from "../utils";
import "../App.css";

class Header extends Component {
  render() {
    let { pacakage, index } = this.props;
    return (
      <div>
        {pacakage && (
          <div className="package-card">
            <div
              className="label"
              style={{ fontSize: "20px", color: "#7966D6" }}
            >
              {"Package-" + (index + 1)}
            </div>
            <div className="package-card-row">
              <div className="label">Items :</div>
              <div className="value">{pacakage.name}</div>
            </div>
            <div className="package-card-row">
              <div className="label">Total Weigth :</div>
              <div className="value">{pacakage.weight + "(g)"}</div>
            </div>
            <div className="package-card-row">
              <div className="label">Total Price :</div>
              <div className="value">{"$" + pacakage.price}</div>
            </div>
            <div className="package-card-row">
              <div className="label">Courier Charge :</div>
              <div className="value">
                {"$" + getCourierPrice(pacakage.weight)}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
