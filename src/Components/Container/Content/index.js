import React, { Component } from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import HotelView from './HotelView'

class Content extends Component {
  render() {
    return (
      <StContent>
        <Sidebar />
        <HotelView />
      </StContent>
    )
  }
}

const StContent = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  display: flex;
`

export default Content