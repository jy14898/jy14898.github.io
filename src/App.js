import React, { Component } from 'react';
import styled from 'styled-components/macro';

import { GlobalStyle } from './theme/globalStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackExchange, faYoutube } from '@fortawesome/free-brands-svg-icons'

const AppWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

const Idk = styled.div`
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

const Social = styled.div`
    margin-top: 10px;
    font-size:2em;
    display: flex;
    justify-content: space-evenly;
`;

class App extends Component {
  render() {
    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <Idk>
                    <Headline>welcome to my website</Headline>
                    I might put stuff here later
                    <Social>
                        <a href="https://github.com/jy14898"><FontAwesomeIcon icon={faGithub}/></a>
                        <a href="https://stackexchange.com/users/7246868/joseph-young"><FontAwesomeIcon icon={faStackExchange}/></a>
                        <a href="https://www.youtube.com/channel/UCgPjQ2V3APd4wv7myjEZoBA"><FontAwesomeIcon icon={faYoutube}/></a>
                    </Social>
                </Idk>
            </AppWrapper>
        </>
    );
  }
}

export default App;
