import { 
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
} from './types';


export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function deleteCartProduct(product) {
    return ({
        type: DELETE_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            
        ]
    })
}