import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    products: [],
    cart: []
}

const SET_PRODUCTS = "SET_PRODUCTS"
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const INC_QUANTITY = "INC_QUANTITY"
const DEC_QUANTITY = "DEC_QUANTITY"
const GRAND_TOTAL = "GRAND_TOTAL"


const grocReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_TO_CART:
            const item = state.products.find(p => p._id === action.payload._id)
            const inCart = state.cart.find(p => p._id === action.payload._id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item)
                    : [...state.cart, { ...item, qty: 1 }]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(p => p._id !== action.payload._id)
            }
        case INC_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item._id === action.payload._id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                ),
            };
        case DEC_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item._id === action.payload._id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                ),
            };
        // case GRAND_TOTAL:
        //     return {
        //         ...state,
        //         cart: state.cart.reduce((prev,next)=>prev+next.price*next.qty,state.cart)
        //     };
        default:
            return state
    }

}
export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}
export const addtocart = (item_id) => {
    return {
        type: ADD_TO_CART,
        payload: {
            _id: item_id,
        }
    }
}
export const increment = (item_id) => {
    return {
        type: INC_QUANTITY,
        payload: {
            _id: item_id
        }
    }
}
export const decrement = (item_id) => {
    return {
        type: DEC_QUANTITY,
        payload: {
            _id: item_id
        }
    }
}
export const Remove = (item_id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            _id: item_id,
        }
    }
}
// export const GrandTotal = (item_id, qty) => {
//     return {
//         type: GRAND_TOTAL,
//         payload: {
//             _id: item_id,
//             qty
//         }
//     }
// }

const reducer = combineReducers({ shop: grocReducer })
const store = createStore(reducer, composeWithDevTools())

export default store;