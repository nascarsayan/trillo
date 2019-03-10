import React, { Component } from 'react'
import styled from 'styled-components'
import { line, screenWidth } from '@/Components/Identifiers'

import Description from './Description'
import UserReviews from './UserReviews'

class Detail extends Component {
  render() {
    return (
      <StDetail>
        <Description />
        <UserReviews />
      </StDetail>
    )
  }
}

const StDetail = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  display: flex;
  padding: 4.5rem;
  @media only screen and (max-width: ${screenWidth[3]}) {
    padding: 3rem;
  }
  @media only screen and (max-width: ${screenWidth[5]}) {
    flex-direction: column;
  }
  font-size: 1.4rem;
  background-color: ${p => p.c.grey.light[0]};
  border-bottom: ${p => line(p)};
`

export default Detail