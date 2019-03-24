import React, { Component } from 'react';
import styled from 'styled-components/macro';

import { GlobalStyle } from './theme/globalStyle';

const AppWrapper = styled.div`
    margin: 100px auto;
    width: 400px;
`;

const Headline = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em 0;
  padding: 0.25em 1em;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <Headline>welcome to my website</Headline>
                I might put stuff here later
            </AppWrapper>
        </>
    );
  }
}

export default App;
