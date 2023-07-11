import { styled } from "styled-components";

export const FormCartContainer = styled.form`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 70rem;
    width: 100%;
    margin: 2.5rem auto;

    @media (max-width: 991px) {
        padding: 2rem 0.75rem;
    }

    h2{
        font-size: 1.125rem;
        font-family: 'Baloo 2', display;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }

`