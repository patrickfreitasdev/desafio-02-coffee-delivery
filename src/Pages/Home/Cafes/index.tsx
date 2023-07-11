import { Cafe, CafeContext } from "../../../contexts/CafesContext"
import { CafesContainer, SubTitle } from "./styles"
import { CafeItem } from "../../../Components/Cafe"
import { useContext } from "react";

export const Cafes = () => {

  const { cafes } = useContext(CafeContext);

  return (
    <>
      <SubTitle>Nossos cafés</SubTitle>
      <CafesContainer>
        {cafes.map((cafe: Cafe) => {
          return (
            <CafeItem
              key={cafe.id}
              id={cafe.id}
              imgPath={cafe.imgPath}
              title={cafe.title}
              tags={cafe.tags}
              description={cafe.description}
              price={cafe.price}
              qtd={cafe.qtd}
              inCart={cafe.inCart}
            />
          )
        })}
      </CafesContainer>
    </>
  )
}

