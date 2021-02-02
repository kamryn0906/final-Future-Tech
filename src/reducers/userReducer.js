import {
    SET_SHIPPING_FORM,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    user: {},
    cartProducts: [],
    shippingForm: {
        _id: 0,
        total: 0,
        orderNumber: '',
        orderDate: null,
        creditCard: '',
        user: {
            name: '',
            shippingAddress: ''
        }
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTHENTICATE_USER: 
            const { user } = action.payload;
            return {
                ...state,
                user
            }
        case ADD_CART_PRODUCT:
            var exists = false
            const newCP = action.payload;
            var cartProducts = []
            state.cartProducts.map(cartProduct => {
                if(cartProduct.product._id == newCP._id) {
                    exists = true
                    cartProduct.quantity += 1;
                }
                cartProducts.push(cartProduct);
            })
            if(exists == false)  {
                cartProducts.push({
                    _id: state.cartProducts.length + 1,
                    product: newCP,
                    quantity: 1
                })
            }
            return {
                ...state,
                cartProducts: cartProducts
            }
        case SET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload
            }
        case SET_SHIPPING_FORM:
            let shippingForm;
            state.shpping.map(shipping => {
                if(shipping._id == action.payload) {
                    shippingForm = shipping;
                }
            })
            return {
                ...state,
                shippingForm
            }
        default: return state;
    }
}