import React, { Component } from 'react'
import styled from 'styled-components'
import { Review, ButtonInline } from '@/Components/Widgets'
import p1 from '@img/user-1.jpg'
import p2 from '@img/user-2.jpg'


class UserReviews extends Component {
  render() {
    return (
      <StUserReviews>
        {
          [
            {
              user: {
                name: 'Nick Smith',
                img: p1,
              },
              date: 'Feb 23rd, 2017',
              rating: 7.8,
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.'
            },
            {
              user: {
                name: 'Mary Thomas',
                img: p2,
              },
              date: 'Sept 13th, 2017',
              rating: 9.3,
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.'
            },
          ].map((r, idx) => (
            <Review key={`${idx}`} data={r}></Review>
          ))
        }
        <ButtonInline>Show all<span>&rarr;</span></ButtonInline>
      </StUserReviews>
    )
  }
}

const StUserReviews = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default UserReviews