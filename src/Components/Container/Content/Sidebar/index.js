import React, { Component } from 'react'
import styled from 'styled-components'

class Sidebar extends Component {
  render() {
    return (
      <StSidebar>Sidebar</StSidebar>
    )
  }
}

export const StSidebar = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  background-color: ${p =>p.c.grey.dark[0]};
  flex: 0 0 18%;
`

export default Sidebar