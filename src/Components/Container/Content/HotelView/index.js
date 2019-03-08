import React, { Component } from 'react'
import styled from 'styled-components'

class HotelView extends Component {
  render() {
    return (
      <StHotelView>HotelView</StHotelView>
    )
  }
}

const StHotelView = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  background-color: ${p =>p.c.white};
  flex: 1;

  background-color: orangered;
  min-height: 80rem;
`

export default HotelView