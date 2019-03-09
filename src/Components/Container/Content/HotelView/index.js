import React, { Component } from 'react'
import styled from 'styled-components'
import { GalleryItem } from '@/Components/Widgets'
import Overview from './Overview'
import Detail from './Detail'
import Cta from './Cta'

class HotelView extends Component {
  render() {
    return (
      <StHotelView>
        <Gallery>
          {this.props.images.map((img, idx) => <GalleryItem key={`${idx}`} img={img}></GalleryItem>)}
        </Gallery>
        <Overview data={{
          heading: 'Hotel Transylvania',
          stars: 5,
          stari: 'icon-star',
          locationi: 'icon-location-pin',
          location: 'Disneyland, Utopia',
          rating: {
            average: '8.6',
            count: '429',
          },
          }} />
        <Detail/>
        <Cta/>
      </StHotelView>
    )
  }
}

const StHotelView = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  background-color: ${p =>p.c.white};
  flex: 1;
`
const Gallery = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  display: flex;
`


export default HotelView