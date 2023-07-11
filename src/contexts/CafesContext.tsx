import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { CafeApi } from "../api/cafes";
import { useNavigate } from "react-router-dom";
import { Cafe, CartReducer, SuccessCheckoutProps } from "../reducers/cart/reducer";
import { addItemToCartAction, checkoutSuccessAction, eraseCartAction, remoteItemFromCartAction, updateCartAction } from "../reducers/cart/actions";

interface CafeContextType {
    cafes: Cafe[];
    cart: Cafe[];
    cartAmount: number;
    cartTotalItems: number;
    shippingAmount: number;
    checkoutSuccess: SuccessCheckoutProps;
    updateCart: (id: string, qtd: number) => void;
    removeItemCart: (id: string) => void;
    processCartCheckout: (data: SuccessCheckoutProps) => void;
}

export const CafeContext = createContext({} as CafeContextType);

interface CafeContextProps {
    children: ReactNode;
}

const SuccessCheckoutDefaultValues: SuccessCheckoutProps = {
    checkoutStatus: false,
    street: '',
    street_number: '',
    city: '',
    state: '',
    neighborhood: '',
    shipping_time: '30 - 35 Minutos',
    paymentType: '',
}


export function CafeContextProvider({ children }: CafeContextProps) {

    const navigate = useNavigate();
    const [cartState, dispatch] = useReducer(CartReducer, {
        cart: [],
        shippingAmount: 3.5,
        cartAmount: 0,
        cartTotalItems: 0,
        checkoutSuccess: SuccessCheckoutDefaultValues
    }, () => {
        const storedStateAsJSON = localStorage.getItem('@v1_coffe_delivery_cart');

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON);
        }
    });

    const { checkoutSuccess, cart, shippingAmount, cartAmount, cartTotalItems } = cartState;

    const [cafes, setCafes] = useState<Cafe[]>(
        CafeApi.map(cafe => {
            const isInCart = cart.find((item) => item.id === cafe.id)
            if (isInCart) {
                return {
                    ...cafe,
                    qtd: isInCart.qtd,
                    inCart: true
                }
            } else {
                return cafe;
            }
        })
    );

    useEffect(() => {
        localStorage.setItem('@v1_coffe_delivery_cart', JSON.stringify(cartState));
    }, [cartState]);


    function updateCart(id: string, quantidade: number) {
        if (quantidade === 0) {
            removeItemCart(id);
        } else {
            const cafeToUpdate = cart.find((cafe) => cafe.id === id);
            if (cafeToUpdate) {
                dispatch(updateCartAction(cafeToUpdate, quantidade));
            } else {
                const cafeToAdd = cafes.find((cafe) => cafe.id === id);
                if (cafeToAdd) {
                    const cartItem = {
                        ...cafeToAdd,
                        inCart: true,
                        qtd: quantidade
                    };
                    dispatch(addItemToCartAction(cartItem));
                }
            }
        }
    }

    function removeItemCart(id: string) {
        dispatch(remoteItemFromCartAction(id));
    }

    function processCartCheckout(setCheckoutSuccessData: SuccessCheckoutProps) {

        localStorage.removeItem('@v1_coffe_delivery_cart');

        dispatch(eraseCartAction());

        dispatch(checkoutSuccessAction(setCheckoutSuccessData))

        navigate('/success');
    }


    return (
        <CafeContext.Provider value={{ cafes, cartAmount, cartTotalItems, cart, shippingAmount, checkoutSuccess, updateCart, removeItemCart, processCartCheckout }}>
            {children}
        </CafeContext.Provider>
    );
}
