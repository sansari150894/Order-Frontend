import React, { Component } from 'react';
import '../App.css';

//import of custom components

class SingleProduct extends Component {

  render() {

    let {name, price, weight} = this.props.product;

    return (
        <div className="card-item">
        <div className="single-product">
          <div className="product-name">{name}</div>
          <div className="product-price">{price}</div>
          <div className="product-weight">{weight}</div>
          <div className="product-select">
            <input type="checkbox" 
            name="" 
            value=""
            onChange={()=>{this.props.onSelectedItems(this.props.product)}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
