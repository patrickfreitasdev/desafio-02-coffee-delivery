import { styled } from "styled-components";

export const SuccessOrderContainer = styled.div`
    display: flex;
    max-width: 70rem;
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 5rem 0;

    @media (max-width: 991px) {
        padding: 5rem 0.75rem;
        justify-content: center;
        img{
            width: 100%;
            height: auto;
        }
    }

    h1{
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
        color: ${props => props.theme["yellow-dark"]};

        + h6{
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }
    }

`

export const SuccessDetailsWrapper = styled.div`
    margin-top: 2.5rem;
    background: linear-gradient(to right, ${props => props.theme["yellow-dark"]}, ${props => props.theme.purple});
    border-radius: 6px 36px;
    padding: 1px;

`

export const SuccessDetails = styled.div`
    background-color: ${props => props.theme.background};
    padding: 2.5rem;
    border-radius: 6px 36px;

    ul{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        ol{
            display: flex;
            gap: 12px;
            div{
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: 130%;
            }

            .icon{
                color: ${props => props.theme.white};
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 999px;
                width: 2rem;
                height: 2rem;
            }
            .map{
                background-color: ${props => props.theme.purple};
            }
            .timer{
                background-color: ${props => props.theme.yellow};
            }
            .money{
                background-color: ${props => props.theme["yellow-dark"]};
            }
        }
    }
   
`