import React, { Component } from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import HotelView from './HotelView'

class Content extends Component {
  render() {
    return (
      <StContent>
        <Sidebar items={[
          { icon: 'icon-home', text: 'Hotel' },
          { icon: 'icon-aircraft-take-off', text: 'Flight' },
          { icon: 'icon-key', text: 'Car rental' },
          { icon: 'icon-map', text: 'Tours' },
        ]} footer={<>&copy;2017 by trillo. All rights reserved.</>}/>
        <HotelView />
      </StContent>
    )
  }
}

const StContent = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  display: flex;
`

export default Content