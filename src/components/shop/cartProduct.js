import React, { Component } from 'react';
import Quantity from '../quantity';
import PriceTag from '../priceTag';

class CartProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { product };
    
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = () => {
        this.setState({product});
        return console.log(ok)
    }

    render() {
        console.log(this.props);
        const { className, product, quantity} = this.props;
        const { title, price, imageUrl } = product;
        return (
            <div className={`${className} cart-product`}>
                <img className='cart-product__image' src={imageUrl}/>
                <div className='cart-product__title'>{title}</div>
                <Quantity className='cart-product__quantity' quantity={quantity}/>
                <a onClick={this.handleDelete} className={`${className} cart-product__remove`}>
                    <i className="fas fa-trash"></i>      
                </a>
                <PriceTag className='cart-product__price' title={price}/>
            </div>
        )
    }
}

export default CartProduct;