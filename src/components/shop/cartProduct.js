import React, { Component } from 'react';
import Quantity from '../quantity';
import PriceTag from '../priceTag';

class CartProduct extends Component {
    handleDeleteFromCart = () => {
        if(document.getElementById('cart-product').classList.contains('cart-hidden')) {
            document.getElementById('cart-product').classList.add('cart-hidden');
            console.log("doesn't have cart hidden")
        } else {
            console.log("does have cart hidden")
            document.getElementById('cart-product').classList.remove('cart-hidden');
            const { _id, title, description, price, belongsTo, imageUrl } = this.props;
            this.props.deleteCartProduct({ _id, title, description, price, belongsTo, imageUrl });
        }
    }
    render() {
        const { className, product, count} = this.props;
        const { title, price, imageUrl } = product;
        return (
            <div className={`${className} cart-product`}>
                <img className='cart-product__image' src={imageUrl}/>
                <div className='cart-product__title'>{title}</div>
                <Quantity className='cart-product__quantity'/>
                <a onClick={this.props.handleDeleteFromCart} className={`${className} cart-product__remove`}>
                    <i className="fas fa-trash"></i>      
                </a>
                <PriceTag className='cart-product__price' title={price}/>
            </div>
        )
    }
}

export default CartProduct;