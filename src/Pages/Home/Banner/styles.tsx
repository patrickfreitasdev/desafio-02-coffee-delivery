import { styled } from "styled-components";
import backgroundBanner from '../../../assets/backgroundBanner.svg';

export const BannerContainer = styled.div`
    background-image: url(${backgroundBanner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const BannerContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 3.2rem;
    padding: 5.875rem 0;
    margin: 0 auto;
    max-width: 70rem;
    @media (max-width: 991px) {
        padding: 5.875rem 0.75rem;
    }
    img{
        max-width: 100%;
        height: auto;
    }
`

export const BannerText = styled.div`
    flex: 1;
    h1{
        color: ${props => props.theme["base-title"]};
        font-size: 3rem;
        font-family: 'Baloo 2', display;
        line-height: 130%;
    }
    p{
        font-size: 1.25rem;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
        margin-top: 1rem;
    }
`

export const FeaturesContainer = styled.div`
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    grid-gap: 1.56rem;
`

export const FeaturesItemBase = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: red;
        border-radius: 999px;
        height: 32px;
        width: 32px;
        color: ${props => props.theme.white}
    }
    span{
        font-size: 1rem;
    }
`

/** Todo, melhorar a logica e mapear as cores */

export const CompraSegura = styled(FeaturesItemBase)`
    .icon{
        background-color: ${props => props.theme["yellow-dark"]};
    }   
`

export const Embalagem = styled(FeaturesItemBase)`
    .icon{
        background-color: ${props => props.theme["base-text"]};
    }   
`

export const Entrega = styled(FeaturesItemBase)`
    .icon{
        background-color: ${props => props.theme["yellow"]};
    }   
`
export const Chegada = styled(FeaturesItemBase)`
    .icon{
        background-color: ${props => props.theme["purple"]};
    }   
`

/** Todo, melhorar a logica e mapear as cores */