import styled from "styled-components";

export const StyledButton = styled.button`
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  transition: all 300ms ease-in-out;
  background-color: ${props => props.primary ? "coral" : "black"};
  border: 1px solid ${props => props.primary ? "coral" : "black"};
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: ${props => props.primary ? "coral" : "black"};
    box-shadow: 5px 5px ${props => props.primary ? "coral" : "black"};
  }
  &.outline {
    background-color: transparent;
    border: 1px solid ${props => props.primary ? "coral" : "black"};
    color: ${props => props.primary ? "coral" : "black"};
    &:hover {
      color: white;
      background-color: ${props => props.primary ? "coral" : "black"};
      box-shadow: 5px 5px ${props => props.primary ? "black" : "coral"};
    }
  }
`