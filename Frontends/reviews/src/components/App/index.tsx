import React from 'react';
import { StyledDiv, StyledHeader, StyledLink, StyledLogo } from './styles';
import Logo from './logo.svg';

function App() {
  return (
    <StyledDiv>
      <StyledHeader>
        <StyledLogo src={Logo} alt="Atlas"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
