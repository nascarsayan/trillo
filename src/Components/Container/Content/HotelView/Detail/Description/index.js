import React, { Component } from 'react'
import styled from 'styled-components'
import { Paragraph, FeatureList, Recommend } from '@/Components/Widgets'
import { shadowLight, screenWidth } from '@/Components/Identifiers'
import f1 from '@img/user-3.jpg'
import f2 from '@img/user-4.jpg'
import f3 from '@img/user-5.jpg'
import f4 from '@img/user-6.jpg'

class Description extends Component {
  render() {
    return (
      <StDescription>
        <Paragraph rid={1}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
        </Paragraph>
        <Paragraph rid={0}>
          Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
        </Paragraph>
        <FeatureList features={[
          'Close to the beach',
          'Breakfast included',
          'Free airport shuttle',
          'Free wifi in all rooms',
          'Air conditioning and heating',
          'Pets allowed',
          'We speak all languages',
          'Perfect for families',
        ]}></FeatureList>
        <Recommend data={[
          {name: 'Lucy', pic: f1},
          {name: 'James', pic: f2},
          {name: 'Jacky', pic: f3},
          {name: 'Joseph', pic: f4},
        ]}>
        </Recommend>
      </StDescription>
    )
  }
}

const StDescription = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  background-color: ${p => p.c.white};
  box-shadow: ${shadowLight};
  padding: 3rem;
  flex: 0 0 60%;
  margin-right: 4.5rem;
  @media only screen and (max-width: ${screenWidth[3]}) {
    padding: 2rem;
    margin-right: 3rem;
  }
  @media only screen and (max-width: ${screenWidth[5]}) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`

export default Description