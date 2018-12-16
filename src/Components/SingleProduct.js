import React, { Component } from 'react';
import '../App.css';

//import of custom components
import Select from './Select';

class SingleProduct extends Component {

  render() {

    let {name, price, weight} = this.props.product;

    return (
        <div className="single-product">
          <div className="label-product">{name}</div>
          <div className="label-product">{price}</div>
          <div className="label-product">{weight}</div>
          <div className="label-product">
            <Select onSelectedItems={this.props.onSelectedItems} product={this.props.product}/>
          </div>
        </div>
    );
  }
}

export default SingleProduct;
