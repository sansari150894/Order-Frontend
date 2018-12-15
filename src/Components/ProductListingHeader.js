import React, { Component } from 'react';
import '../App.css';

//import of custom components

class ProductListingHeader extends Component {
  render() {
    return (
        <div className="card-header">
        <div className="single-product">
          <div className="product-name-header">Product Name</div>
          <div className="product-price-header">Product Price ($)</div>
          <div className="product-weight-header">Priduct Weight (g)</div>
          <div className="product-select-header">Select</div>
        </div>
      </div>
    );
  }
}

export default ProductListingHeader;
