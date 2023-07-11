import { useContext } from "react"
import { SideBarCheckoutContainer, SideBarWrapper } from "./styles"
import { CafeContext } from "../../../contexts/CafesContext"
import { CafeCartItem } from "./CafeCartItem";
import { CafeCheckoutTotalPrice } from './CafeCheckoutPrice';


export const SideBarCheckout = () => {

  const { cart } = useContext(CafeContext);

  return (
    <SideBarCheckoutContainer>
      <h2>Cafés Selecionados</h2>
      <SideBarWrapper>
        {cart.map((cafe) => {
          return (
            <CafeCartItem
              key={cafe.id}
              id={cafe.id}
              imgPath={cafe.imgPath}
              qtd={cafe.qtd}
              title={cafe.title}
              price={cafe.price}
            />
          )
        })}
        <CafeCheckoutTotalPrice />
      </SideBarWrapper>
    </SideBarCheckoutContainer>
  )
}
