import React, { Component } from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import HotelView from './HotelView'
import { screenWidth } from '@/Components/Identifiers'

import hotel1 from '@img/hotel-1.jpg'
import hotel2 from '@img/hotel-2.jpg'
import hotel3 from '@img/hotel-3.jpg'

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
        <HotelView images={[
          { src: hotel1, alt: 'hotel 1'},
          { src: hotel2, alt: 'hotel 2'},
          { src: hotel3, alt: 'hotel 3'},
        ]}/>
      </StContent>
    )
  }
}

const StContent = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  display: flex;
  @media only screen and (max-width: ${screenWidth[3]}) {
    flex-direction: column;
  }
`

export default Content