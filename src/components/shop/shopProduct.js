import React, { Component } from 'react';
import Quantity from '../quantity';
import PriceTag from '../priceTag';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class ShopProduct extends Component {

    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
            const { _id, title, description, price, belongsTo, imageUrl } = this.props;
            this.props.addCartProduct({ _id, title, description, price, belongsTo, imageUrl });
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }

    render() {
        const { _id, title, description, price, imageUrl } = this.props;
        return (
            <div className='shop-product'>
                <div className='shop-product__front'>
                    <img className='shop-product__front__image' src={imageUrl}/>
                    <div className='shop-product__front__title'>{title}</div>
                </div>
                <div className='shop-product__back'>
                    <div className='shop-product__back__title'>
                        {title}
                    </div>
                    <div className='shop-product__back__description'>
                        {description}
                    </div>
                    <PriceTag className='shop-product__back__price' title={price}/>
                    <Quantity className='shop-product__back__quantity' count={[]}/>
                    <a onClick={this.handleAddToCart} className='shop-product__back__add-to-cart'>
                        Add to Cart
                    </a>
                </div>
            </div>
        )
    }
}

ShopProduct = connect(null, actions)(ShopProduct);

export default ShopProduct;