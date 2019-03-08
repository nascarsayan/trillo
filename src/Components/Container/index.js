import React, { Component } from 'react'
import styled from 'styled-components'
import { shadowDark } from '@/Components/Identifiers'

import Content from './Content'
import Header from './Header'

class Container extends Component {
  render() {
    return (
      <StContainer>
        <Header />
        <Content />
      </StContainer>
    )
  }
}

const StContainer = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
max-width: 120rem;
margin: 8rem auto;
background-color: ${p =>p.c.grey.light[0]};
box-shadow: ${shadowDark};
min-height: 50rem; 
`

export default Container