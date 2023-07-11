import { Cafe, SuccessCheckoutProps } from "./reducer";

export enum ActionTypes {
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    UPDATE_CART = 'UPDATE_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    ERASE_CART = 'ERASE_CART',
    CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
}


export function addItemToCartAction(cartItem: Cafe) {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: { cartItem }
    }
}

export function updateCartAction(cafeToUpdate: Cafe, quantidade: number) {
    return {
        type: ActionTypes.UPDATE_CART,
        payload: { cafeToUpdate, quantidade }
    }
}

export function remoteItemFromCartAction(id: string) {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: { id }
    }
}

export function eraseCartAction() {
    return {
        type: ActionTypes.ERASE_CART,
        payload: {}
    }
}

export function checkoutSuccessAction(setCheckoutSuccessData: SuccessCheckoutProps) {
    return {
        type: ActionTypes.CHECKOUT_SUCCESS,
        payload: { setCheckoutSuccessData }
    }
}