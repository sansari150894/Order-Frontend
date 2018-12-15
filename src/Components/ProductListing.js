import React, { Component } from "react";
import "../App.css";

//
import ProductListingHeader from './ProductListingHeader';
import SingleProduct from './SingleProduct';

class ProductListing extends Component {
  render() {
    return (
      <div className="main-container">
        <ProductListingHeader/>
        {
            this.props.products.map((product, index)=>{
                return <SingleProduct 
                  key={index} 
                  product={product} 
                  onSelectedItems={this.props.onSelectedItems}
                  onCheckout={this.props.onCheckout}
                />
            })
        }
      </div>
    );
  }
}

export default ProductListing;
