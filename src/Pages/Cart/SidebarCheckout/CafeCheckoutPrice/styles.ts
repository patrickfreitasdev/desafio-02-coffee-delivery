import { styled } from "styled-components";

export const CheckoutAmountContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div{
        display: flex;
        justify-content: space-between;

        p{
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }
        
        strong{
            color: ${props => props.theme["base-subtitle"]};
            font-style: normal;
            font-weight: 700;
            line-height: 130%;
            font-size: 1.25rem;
        }
    }

    button{
        display: flex;
        padding: 12px 8px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        align-self: stretch;
        cursor: pointer;
        border-radius: 6px;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        text-transform: uppercase;
        background: ${props => props.theme["yellow"]};
        color: ${props => props.theme.white};
        margin-top: 1.25rem;
        border: 0;

        &:hover{
            background-color: ${props => props.theme["yellow-dark"]};
        }

        &:disabled{
            background-color: ${props => props.theme["yellow-dark"]};
            opacity: .8;
            cursor: not-allowed;
        }
    }

`