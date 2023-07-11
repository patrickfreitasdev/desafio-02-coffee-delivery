import { styled } from "styled-components";

export const CheckoutFormContainer = styled.div`
    max-width: 40rem;
    width: 100%;
`

export const CheckoutFormAddressWrapper = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
    border-radius: 6px;

    header{
        display: flex;
        gap: 8px;

        svg{
            color: ${props => props.theme["yellow-dark"]};
        }

        h3{
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            columns: ${props => props.theme["base-subtitle"]}
        }

        p{
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }
    }
`

export const CheckoutFormInputs = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: 
        "cep . . ."
        "rua rua rua rua"
        "numero complemento complemento complemento"
        "bairro cidade cidade uf"
    ;
`

export const DefaultInputStyle = styled.input`
    padding: 12px;
    border-radius: 6px;
    border: solid 1px ${props => props.theme["base-button"]};
    background-color: ${props => props.theme["base-input"]};
    font-size: 0.75rem;
    color: ${props => props.theme["base-text"]};

    &::placeholder{
        color: ${props => props.theme["base-label"]};
    }
`

export const CepInput = styled(DefaultInputStyle)`
   grid-area: cep;
`

export const RuaInput = styled(DefaultInputStyle)`
   grid-area: rua;
`

export const NumeroInput = styled(DefaultInputStyle)`
   grid-area: numero;
`

export const ComplementoInputWrapper = styled.div`
    position: relative;
    grid-area: complemento;
    input{
        width: 100%;
    }
    span{
        position: absolute;
        top: 12px;
        right: 12px;
        font-size: 0.75rem;
        font-style: italic;
        font-weight: 400;
        line-height: 130%;
    }
`

export const BairroInput = styled(DefaultInputStyle)`
   grid-area: bairro;
`

export const CidadeInput = styled(DefaultInputStyle)`
   grid-area: cidade;
`
export const UfInput = styled(DefaultInputStyle)`
   grid-area: uf;
   max-width: 3.75rem;
`
export const CheckoutFormPaymentWrapper = styled.div`

    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
    border-radius: 6px;

    header{

        display: flex;
        gap: 8px;

        h3{
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            columns: ${props => props.theme["base-subtitle"]}
        }

        p{
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }
        
        svg{
            color: ${props => props.theme["purple-dark"]};
        }
    }
`

export const CheckoutFormRadioWrapper = styled.div`
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;

    input{
    
        display: none;

        + label{
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 6px;
            text-transform: uppercase;
            background-color: ${props => props.theme["base-button"]};
            padding: 1rem;
            font-size: 0.75rem;
            cursor: pointer;
            border: solid 1px ${props => props.theme["base-button"]};

            svg{
                color: ${props => props.theme.purple};
            }
        }

            &:hover{
                + label {
                    background-color: ${props => props.theme["base-hover"]};
                }
            }

            &:checked{
                + label{
                background-color: ${props => props.theme["purple-light"]};
                border-color: ${props => props.theme.purple};
            }
        }
       
    }
`


