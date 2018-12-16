import React, { Component } from 'react';
import '../App.css';

//import of custom components

class ProductListingHeader extends Component {
  render() {
    return (
        <div className="single-product-header">
          <div className="label-header">Product Name</div>
          <div className="label-header">Product Price ($)</div>
          <div className="label-header">Priduct Weight (g)</div>
          <div className="label-header">Select</div>
        </div>
    );
  }
}

export default ProductListingHeader;
