import React, { Component } from 'react'
import styled from 'styled-components'
import { pulsate } from '@/Components/Widgets'

class Cta extends Component {
  render() {
    return (
      <StCta>
        <h2>Good news! We have 4 free rooms for your selected dates!</h2>
        <button>
          <span className='visible'>Book now</span>
          <span className='invisible'>Only 4 rooms left</span>
        </button>
      </StCta>
    )
  }
}

const StCta = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
padding: 3.5rem 0;
text-align: center;
&>h2 {
  color: ${p => p.c.grey.dark[2]};
  font-size: 2rem;
  font-weight: 300rem;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
}
&>button {
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  border-radius: 100px;
  border: none;
  background-image: linear-gradient(to right, ${p => p.c.primary.light}, ${p => p.c.primary.dark});
  color: #fff;
  position: relative;
  overflow: hidden;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(to right, ${p => p.c.primary.dark}, ${p => p.c.primary.light});
  }

  &>* {
    height: 100%;
    width: 100%;
    display: inline-block;
    transition: all .2s;
  }
  &>.visible {
    padding: 2rem 7.5rem;
  }
  &>.invisible {
    padding: 2rem 0; 
    position: absolute;
    left: 0;
    top: -100%;
  }
  &:hover {
    &>.visible {
      transform: translateY(100%);
    }
    &>.invisible {
      top: 0;
    }
  }
  &:focus {
    outline: none;
    animation: ${pulsate} 1s infinite;
  }
}
`


export default Cta