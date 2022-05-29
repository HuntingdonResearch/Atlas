import React from 'react';
import { StyledCode, StyledDiv, StyledHeader, StyledLink, StyledLogo } from './styles';
import Logo from './logo.svg';
import { AppProps } from './props';

function App(props: AppProps) {
  return (
    <StyledDiv>
      <StyledHeader>
        <StyledLogo src={Logo} alt="Atlas"/>
        <p>
          Edit <StyledCode>src/App.tsx</StyledCode> in <StyledCode>orders-frontend</StyledCode> and save to reload.
        </p>
        <StyledLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledLink>
      </StyledHeader>
    </StyledDiv>
  );
}

export default App;
