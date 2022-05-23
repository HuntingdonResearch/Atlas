import styled, { keyframes } from 'styled-components';

export const StyledDiv = styled.div`
  text-align: center;
`;

export const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

export const StyledLink = styled.a`
  color: #61dafb;
`;