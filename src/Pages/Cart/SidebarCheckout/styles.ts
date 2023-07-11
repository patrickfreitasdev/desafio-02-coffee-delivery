import { styled } from "styled-components";

export const SideBarCheckoutContainer = styled.div`
  flex: 1;
`

export const SideBarWrapper = styled.div` 
    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;
    border-radius: 6px 44px;
`
