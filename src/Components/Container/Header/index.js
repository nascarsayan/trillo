import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '@img/logo.png'
import { Form } from '@/Components/Widgets'

class Header extends Component {
  render() {
    return (
      <StHeader>
        <img src={logo} alt='trillo logo'></img>
        <form action='#'>
          <Form placeholder={'Search Hotels'} icon={'icon-magnifying-glass'}></Form>
        </form>
      </StHeader>
    )
  }
}

const StHeader = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  height: 7rem;
  background-color: ${p =>p.c.white};
  border-bottom: ${p =>p.c.grey.light[1]};
`

export default Header