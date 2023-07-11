import { styled } from "styled-components";

export const HeaderContainer = styled.header`

    background-color: ${props => props.theme.background};
    position: sticky;
    top: 0;

    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 0;
        max-width: 70rem;
        width: 100%;
        margin: 0 auto;
        @media (max-width: 991px) {
            padding: 2rem 0.75rem;
        }
    }
`

export const CartContainer = styled.div`
    display: flex;
    align-items: center;

    button{
        display: flex;
        align-items: center;
        background-color: ${props => props.theme["purple-light"]};
        border-radius: 8px;
        margin: 0 0.75rem;
        padding: 8px;
        cursor: pointer;
        border: 0;
        color: ${props => props.theme["purple-dark"]};

        svg{
            color: ${props => props.theme.purple};
            margin-right: 2px;
        }
    }
`

export const CartAnchor = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    background-color:  ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    position: relative;

    span{
        background-color: ${props => props.theme["yellow-dark"]};
        position: absolute;
        top: -10px;
        right: -6px;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme.white};
        height: 20px;
        width: 20px;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`