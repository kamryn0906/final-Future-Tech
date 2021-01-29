import { 
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
} from './types';

// export function paymentForm({name, address}) {
//     return ({
//         type: AUTHENTICATE_USER,
//         payload: {
//             user: {
//                 _id: 0,
//                 name: [],
//                 address: [],
//                 cartProducts: []
//             }
//         }
//     })
// }

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
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