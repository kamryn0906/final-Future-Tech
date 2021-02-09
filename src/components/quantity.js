import React, { Component } from 'react';

class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {quantity: 0};
    
        this.handleAddAndSubtract = this.handleAddAndSubtract.bind(this);
    }
    
    handleAddAndSubtract = () => {
        if {
            this.setState({quantity: quantity + 1});
            (this.state.quantity)
        }else{
            this.setState({quantity: quantity - 1}); 
        }
    }
    
    render() {
        const { className, quantity} = this.props;
        return (
            <div className={`${className} quantity`}>
                <div className='quantity__count'>
                    {quantity}
                </div>
                <a onClick={this.handleAddToCart} className={`${className} quantity__plus`}>
                    <i className='fas fa-plus'></i>     
                </a>
                <a onClick={this.handleAddToCart} className={`${className} quantity__minus`}>
                    <i className='fas fa-minus'></i>      
                </a>
            </div>
        )
    }
}

export default Quantity;