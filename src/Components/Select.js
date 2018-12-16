import React, {Component} from 'react';

class Select extends Component{

    constructor(props){
        super(props);
        this.state={
            select: false
        }
    }

    render(){
        return (<input type="checkbox" 
        value={this.state.select}
        onChange={(e)=>{
          this.setState({select: !this.state.select});
          this.props.onSelectedItems(this.props.product, this.state.select)}
        }
        />)
    }
}

export default Select;