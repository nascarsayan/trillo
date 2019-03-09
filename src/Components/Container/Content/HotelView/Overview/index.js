import React, { Component } from 'react'
import styled from 'styled-components'
import { Svg, ButtonInline } from '@/Components/Widgets'
import { line } from '@/Components/Identifiers'

export class Overview extends Component {
  render() {
    const {heading, stars, stari, location, locationi, rating: {average, count}} = this.props.data
    return (
      <StOverview>
        <h1>{heading}</h1>
        <div className='stars'>
          {
            ((Array(stars).fill('')).map((_, id) => <Svg key={id} icon={stari}/>))
          }
        </div>
        <div className='location'>
          <Svg icon={locationi}/>
          <ButtonInline>{location}</ButtonInline>
        </div>
        <div className='rating'>
          <div className='average'>{average}</div>
          <div className='count'>{count} votes</div>
        </div>
      </StOverview>
    )
  }
}

const StOverview = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: ${p => line(p)};
  &>h1 {
    font-size: 2.25rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1.5rem 3rem;
  }
  &>.stars {
    margin-right: auto;
    display: flex;
  }
  &>.location {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    &>svg {
      margin-right: .5rem;
    }
  }
  &>.stars>svg,
  &>.location>svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: ${p =>p.c.primary.default};
    
  }
  
  &>.rating {
    background-color: ${p =>p.c.primary.default};
    color: ${p =>p.c.white};
    margin-left: 3rem;
    padding: 0 2.25rem;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &>.average {
      font-size: 2.25rem;
      font-weight: 300;
      margin-bottom: -3px;
    }
    &>.count {
      font-size: .8rem;
      text-transform: uppercase;
    }
  }
`

export default Overview