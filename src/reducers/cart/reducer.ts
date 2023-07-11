import { ActionTypes } from "./actions";

interface CafesState {
    cart: Cafe[],
    shippingAmount: number | 3.5,
    cartAmount: number | 0,
    cartTotalItems: number | 0,
    checkoutSuccess: SuccessCheckoutProps,
}

export interface Cafe {
    id: string;
    imgPath: string;
    title: string;
    tags: string[];
    description: string;
    price: number;
    qtd: number;
    inCart: boolean;
}

export interface SuccessCheckoutProps {
    checkoutStatus: boolean,
    street: string,
    street_number: string, // some location may not have number lets not handle as fixed number.
    city: string,
    state: string,
    complement?: string,
    neighborhood: string,
    shipping_time: string,
    paymentType: string,
}

export function CartReducer(state: CafesState, action: any) {

    switch (action.type) {
        case ActionTypes.ADD_ITEM_TO_CART: {
            return {
                ...state,
                cartAmount: state.cartAmount + (action.payload.cartItem.price * action.payload.cartItem.qtd),
                cartTotalItems: state.cartTotalItems + action.payload.cartItem.qtd,
                cart: [...state.cart, action.payload.cartItem],
            }
        }
        case ActionTypes.UPDATE_CART: {
            const updatedCart: Cafe[] = state.cart.map((cafe) => {
                if (cafe.id === action.payload.cafeToUpdate.id) {
                    return {
                        ...cafe,
                        inCart: true,
                        qtd: action.payload.quantidade
                    }
                }
                return cafe;
            });

            const cartTotalItems = updatedCart.reduce((total, item) => total + item.qtd, 0);
            const cartTotalPrice = updatedCart.reduce((total, item) => total + (item.price * item.qtd), 0);

            return {
                ...state,
                cart: updatedCart,
                cartTotalItems: cartTotalItems,
                cartAmount: cartTotalPrice
            };
        }
        case ActionTypes.REMOVE_ITEM_FROM_CART: {
            const updatedCart: Cafe[] = state.cart.filter((cafe: Cafe) => cafe.id !== action.payload.id);
            const cartTotalItems = updatedCart.reduce((total, item) => total + item.qtd, 0);
            const cartTotalPrice = updatedCart.reduce((total, item) => total + (item.price * item.qtd), 0);

            return {
                ...state,
                cart: updatedCart,
                cartTotalItems: cartTotalItems,
                cartAmount: cartTotalPrice
            };
        }
        case ActionTypes.ERASE_CART: {
            return {
                ...state,
                cart: [],
                cartAmount: 0,
                cartTotalItems: 0
            }
        }
        case ActionTypes.CHECKOUT_SUCCESS: {
            return {
                ...state,
                checkoutSuccess: action.payload.setCheckoutSuccessData
            }
        }
        default: return state;
    }
}