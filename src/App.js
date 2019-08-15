import React, { Component } from 'react';
import styled from 'styled-components/macro';

import { GlobalStyle } from './theme/globalStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faStackExchange, faYoutube, faCodepen } from '@fortawesome/free-brands-svg-icons'

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
    margin-top: 20px;
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
                        <a href="https://www.linkedin.com/in/jy14898"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://github.com/jy14898"><FontAwesomeIcon icon={faGithub}/></a>
                        <a href="https://stackexchange.com/users/7246868/joseph-young"><FontAwesomeIcon icon={faStackExchange}/></a>
                        <a href="https://www.youtube.com/channel/UCgPjQ2V3APd4wv7myjEZoBA"><FontAwesomeIcon icon={faYoutube}/></a>
                        <a href="https://codepen.io/jy14898"><FontAwesomeIcon icon={faCodepen}/></a>
                        <a href="https://orcid.org/0000-0003-1330-0515"><i class="ai ai-orcid ai-1x"></i></a>
                    </Social>
                </Idk>
            </AppWrapper>
        </>
    );
  }
}

export default App;
