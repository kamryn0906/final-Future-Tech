import React from 'react';

function CartButton({className, icon, onClick}) {
    const [SET_SHOP_PRODUCTS] = React.useState(initialList); 

    handleRemove(cartProducts) {
        console.log(cartProducts);
    }

    return (
        <a onClick={handleRemove} className={`${className} cart-button`}>
            <i className={icon}/>        
        </a>
    )
}

export default CartButton;