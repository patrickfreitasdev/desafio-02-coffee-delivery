import { BannerContainer, BannerContainerWrapper, BannerText, Chegada, CompraSegura, Embalagem, Entrega, FeaturesContainer } from "./styles"
import BannerImg from '../../../assets/banner.png';
import { Coffee, Package, ShoppingCart } from "phosphor-react"

export const Banner = () => {
    return (
        <>
            <BannerContainer>
                <BannerContainerWrapper>
                    <BannerText>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        <FeaturesContainer>
                            {/** Todo, melhorar a logica e mapear as cores e items */}
                            <CompraSegura>
                                <div className="icon">
                                    <ShoppingCart size={16} weight="fill" />
                                </div>
                                <span>Compra simples e segura</span>
                            </CompraSegura>
                            <Embalagem>
                                <div className="icon">
                                    <Package size={16} weight="fill" />
                                </div>
                                <span>Embalagem mantém o café intacto</span>
                            </Embalagem>
                            <Entrega>
                                <div className="icon">
                                    <Package size={16} weight="fill" />
                                </div>
                                <span>Entrega rápida e rastreada</span>
                            </Entrega>
                            <Chegada>
                                <div className="icon">
                                    <Coffee size={16} weight="fill" />
                                </div>
                                <span>O café chega fresquinho até você</span>
                            </Chegada>
                            {/** Todo, melhorar a logica e mapear as cores e items */}
                        </FeaturesContainer>
                    </BannerText>
                    <img src={BannerImg} />
                </BannerContainerWrapper>
            </BannerContainer></>
    )
}
