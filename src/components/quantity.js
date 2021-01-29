import React, { Component } from 'react';

class Quantity extends Component {
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