import { ReactNode, createContext, useEffect, useState } from "react";
import { CafeApi } from "../api/cafes";
import { useNavigate } from "react-router-dom";

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
    const [checkoutSuccess, setCheckoutSuccess] = useState<SuccessCheckoutProps>(SuccessCheckoutDefaultValues);
    const [cart, setCart] = useState<Cafe[]>(JSON.parse(localStorage.getItem('@v1_coffe_delivery_cart') || '[]'));
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

    const [shippingAmount, setShippingAmount] = useState(3.5);
    const [cartAmount, setCartmount] = useState(0);
    const [cartTotalItems, setCartTotalItems] = useState(0);

    useEffect(() => {

        const cartTotalItemsReducer = cart.reduce((qtd, cafe) => {
            return qtd + cafe.qtd
        }, 0)

        const cartAmountReducer = cart.reduce((price, cafe) => {
            return price + cafe.price * cafe.qtd
        }, 0.0)

        setCartTotalItems(cartTotalItemsReducer)
        setCartmount(cartAmountReducer)
        localStorage.setItem('@v1_coffe_delivery_cart', JSON.stringify(cart));

        //console.log(cafes)

    }, [cart, cafes]);


    function updateCart(id: string, quantidade: number) {
        if (quantidade === 0) {
            removeItemCart(id);
        } else {
            const cafeInCart = cart.find((cafe) => cafe.id === id);

            if (cafeInCart) {
                const updatedCart = cart.map((cafe) => {
                    if (cafe.id === id) {
                        return {
                            ...cafe,
                            inCart: true,
                            qtd: quantidade
                        };
                    }
                    return cafe;
                });
                setCart(updatedCart);
            } else {
                const cafeToAdd = cafes.find((cafe) => cafe.id === id);

                if (cafeToAdd) {
                    const cartItem = {
                        ...cafeToAdd,
                        inCart: true,
                        qtd: quantidade
                    };

                    setCart([...cart, cartItem]);
                }
            }
        }
    }

    function removeItemCart(id: string) {
        const updatedCart = cart.filter((cafe) => cafe.id !== id);
        setCart(updatedCart);
    }

    function processCartCheckout(data: SuccessCheckoutProps) {
        setCheckoutSuccess(data);
        localStorage.removeItem('@v1_coffe_delivery_cart');
        setCart([]);
        navigate('/success');
    }


    return (
        <CafeContext.Provider value={{ cafes, cartAmount, cartTotalItems, cart, shippingAmount, checkoutSuccess, updateCart, removeItemCart, processCartCheckout }}>
            {children}
        </CafeContext.Provider>
    );
}
