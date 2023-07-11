import { styled } from "styled-components";

export const CafeCartItemContainer = styled.div`  
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.5rem;
   
    &:not(:last-child){
        border-bottom: solid 1px ${props => props.theme["base-button"]};
    }
       
`

export const CafeContent = styled.div`  
    display: flex;
    gap: 1.25rem;
   
    img{
        width: 4rem;
        height: 4rem;
        object-fit: contain;
    }

    h4{
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`


export const CafePrice = styled.div`  

`

export const CafeItemControl = styled.div`
    display: flex;
    margin-top: 8px;
    gap: 8px;
   

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
        cursor: pointer;

        &:hover{
            background-color: ${props => props.theme["base-hover"]};
        }

        svg{
            color: ${props => props.theme.purple};
        }
    }
`