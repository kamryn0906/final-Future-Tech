import React, { Component } from 'react';
import Quantity from '../quantity';
import PriceTag from '../priceTag';

class CartProduct extends Component {
    render() {
        console.log(this.props);
        const { className, product, quantity, icon, onClick } = this.props;
        const { title, price } = product;
        return (
            <div className={`${className} cart-product`}>
                <img className='cart-product__image' src='http://via.placeholder.com/130x130'/>
                <div className='cart-product__title'>{title}</div>
                <Quantity className='cart-product__quantity' quantity={quantity}/>
                <a onClick={this.handleAddToCart} className={`${className} cart-product__remove`}>
                    <i class="fas fa-trash"></i>      
                </a>
                <PriceTag className='cart-product__price' title={price}/>
            </div>
        )
    }
}

export default CartProduct;