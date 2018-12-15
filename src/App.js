import React, { Component } from 'react';
import './App.css';

//import of custom components
import ProductListing from './Components/ProductListing';
import Header from './Components/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products:[
        { name: 'item-1', price: 10, weight:200 },
        { name: 'item-2', price: 100, weight:20 },
        { name: 'item-3', price: 30, weight:300 },
        { name: 'item-4', price: 20, weight:500 },
        { name: 'item-5', price: 30, weight:250 },
        { name: 'item-6', price: 40, weight:10  },
        { name: 'item-7', price: 200, weight:10 },
        { name: 'item-8', price: 120, weight:500 },
        { name: 'item-9', price: 130, weight:790 },
        { name: 'item-10', price: 20, weight:100 },
        { name: 'item-11', price: 10, weight:340 },
        { name: 'item-12', price: 4, weight:800 },
        { name: 'item-13', price: 5, weight:200 },
        { name: 'item-14', price: 240, weight:20 },
        { name: 'item-15', price: 123, weight:700 },
        { name: 'item-16', price: 245, weight:10 },
        { name: 'item-17', price: 230, weight:20 },
        { name: 'item-18', price: 110, weight:200  },
        { name: 'item-19', price: 45, weight:200 },
        { name: 'item-20', price: 67, weight:20 },
        { name: 'item-21', price: 88, weight:300 },
        { name: 'item-22', price: 10, weight:500 },
        { name: 'item-23', price: 17, weight:250 },
        { name: 'item-24', price: 19, weight:10 },
        { name: 'item-25', price: 89, weight:10 },
        { name: 'item-26', price: 45, weight:500 },
        { name: 'item-27', price: 99, weight:790 },
        { name: 'item-28', price: 125, weight:100 },
        { name: 'item-29', price: 190, weight:340 },
        { name: 'item-30', price: 220, weight:800 },
        { name: 'item-31', price: 249, weight:200 },
        { name: 'item-32', price: 230, weight:20 },
        { name: 'item-33', price: 190, weight:700 },
        { name: 'item-34', price: 45, weight:10 },
        { name: 'item-35', price: 12, weight:20 },
        { name: 'item-36', price: 5, weight:200 },
        { name: 'item-37', price: 2, weight:200 },
        { name: 'item-38', price: 90, weight:20 },
        { name: 'item-39', price: 12, weight:300 },
        { name: 'item-40', price: 167, weight:500 },
        { name: 'item-41', price: 12, weight:250 },
        { name: 'item-42', price: 8, weight:10 },
        { name: 'item-43', price: 2, weight:10  },
        { name: 'item-44', price: 9, weight:500 },
        { name: 'item-45', price: 210, weight:790 },
        { name: 'item-46', price: 167, weight:100 },
        { name: 'item-47', price: 23, weight:340 },
        { name: 'item-48', price: 190, weight:800 },
        { name: 'item-49', price: 199, weight:200 },
        { name: 'item-50', price: 12, weight:20 },
      ],
      selectedItems:[]   
    }
  }

  onSelectedItems = (item) =>{
    debugger
    let selectedItemArray = this.state.selectedItems;
    this.setState({
      selectedItems: [...selectedItemArray, item]
    })
  }

  onCheckout=()=>{
    console.log(this.state.selectedItems);
  }

  render() {
    return (
      <div>
        <Header onCheckout={this.onCheckout}/>
        <ProductListing 
          products= {this.state.products} 
          onSelectedItems={this.onSelectedItems} 
          onCheckout={this.onCheckout}
        />
      </div>
    );
  }
}

export default App;
