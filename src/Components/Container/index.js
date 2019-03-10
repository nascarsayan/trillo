import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { shadowDark, screenWidth } from '@/Components/Identifiers'

import Content from './Content'
import Header from './Header'

class Container extends Component {
  render() {
    return (
      <StContainer>
        <GlobalStyle />
        <Header />
        <Content />
      </StContainer>
    )
  }
}

const GlobalStyle = createGlobalStyle`
@media
  only screen and (max-width: ${screenWidth[2]}) and (min-width: ${screenWidth[3]}),
  (max-width: ${screenWidth[4]}) {
  html {
    font-size: 50%;
  }
}

`

const StContainer = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
max-width: 120rem;
margin: 8rem auto;
background-color: ${p =>p.c.grey.light[0]};
box-shadow: ${shadowDark};
min-height: 50rem;
@media only screen and (max-width: ${screenWidth[0]}) {
  margin: 0;
}

`

export default Container