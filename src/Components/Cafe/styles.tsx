import { styled } from "styled-components";

export const CafeItemForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;

    header{
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 7.5rem;
            height: 7.5rem;
            object-fit: contain;
            margin-top: -2.5rem;
        }

        h3{
            font-size: 1.25rem;
            color: ${props => props.theme["base-subtitle"]};
            font-family: 'Baloo 2', display;
            font-style: normal;
            font-weight: 700;
            line-height: 130%;
            margin-bottom: 8px;
        }

        p{
            text-align: center;
            color: ${props => props.theme["base-label"]};
            font-size: 0.875rem;
        }
        
    }

    footer{
        display: flex;
        align-items: center;
        margin-top: 2rem;
        grid-gap: 8px;
        justify-content: space-around;
        width: 100%;

        strong{
            small{
                font-weight: 400;
                font-size: 0.875rem;
                margin-right: 2px;
                line-height: 130%;
                font-family: 'Roboto', sans-serif;
            }
            font-family: 'Baloo 2', display;
            font-size: 1.5rem;
            line-height: 130%;
            flex: 1;
        }

        input{
            width: 4.5rem;
            border: none;
            padding: 8px;
            border-radius: 6px;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            color: ${props => props.theme["base-title"]};
            background-color: ${props => props.theme["base-button"]};
        }

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: 0;
            padding: 8px;
            border-radius: 6px;
            color: ${props => props.theme.white};
            background-color: ${props => props.theme["purple-dark"]};
            transition: background-color .2s ease;

            &:hover{
                background-color: ${props => props.theme.purple};
            }

            &:focus,
            &:active{
                box-shadow: 0 0 0 2px ${props => props.theme["purple-light"]};
            }
        }
    }
`

export const TagWrapp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    gap: 4px;

    span{
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        border-radius: 100px;
        padding: 4px 8px;
        text-transform: uppercase;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        text-transform: uppercase;
        font-size: 0.625rem;
    }
`