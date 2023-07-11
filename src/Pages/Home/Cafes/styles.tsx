import { styled } from "styled-components";

export const CafesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 2.5rem;
    margin: 0 auto;
    width: 70rem;
    max-width: 100%;
    @media (max-width: 991px) {
        padding: 0.75rem;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    margin-bottom: 9rem;
`
export const SubTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Baloo 2', display;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};
    margin: 2rem auto 3.375rem auto;
    width: 70rem;
    max-width: 100%;
    @media (max-width: 991px) {
        padding: 0.75rem;
    }
`
