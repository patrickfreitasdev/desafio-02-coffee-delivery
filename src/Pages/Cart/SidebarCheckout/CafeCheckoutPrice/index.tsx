import { useContext } from "react";
import { CheckoutAmountContainer } from "./styles";
import { CafeContext } from "../../../../contexts/CafesContext";

export function CafeCheckoutTotalPrice() {

    const { cartAmount, shippingAmount, cartTotalItems } = useContext(CafeContext);

    return (
        <CheckoutAmountContainer>
            {(cartTotalItems > 0)
                && (
                    <>
                        <div>
                            <p>Total de items</p>
                            <p>{(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cartAmount))}</p>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <p>{(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(shippingAmount))}</p>
                        </div>
                        <div>
                            <strong>Total</strong>
                            <strong>{(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cartAmount + shippingAmount))}</strong>
                        </div>
                    </>
                ) || ( 
                    <strong>Selecione um café antes de continuar</strong>
                )
            }

            <button disabled={(cartTotalItems === 0)} type="submit">Confirmar Pedido</button>
        </CheckoutAmountContainer>
    )
}