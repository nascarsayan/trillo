import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Svg } from '@/Components/Widgets'
import { screenWidth } from '@/Components/Identifiers'

class Sidebar extends Component {
  render() {
    return (
      <StSidebar>
        <ul>
          {this.props.items.map((e, id) => (
            <SidebarItem key={`${id}`} id={id} len={this.props.items.length}>
              <a href='#'>
                <Svg icon={e.icon}></Svg>
                <span>{e.text}</span>
              </a>
            </SidebarItem>
          ))}
        </ul>
        <div>
          {this.props.footer}
        </div>
      </StSidebar>
    )
  }
}

export const StSidebar = styled.nav.attrs(({theme: {colour:c}}) => ({c}))`
  background-color: ${p =>p.c.grey.dark[0]};
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &>ul {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;
    @media only screen and (max-width: ${screenWidth[3]}) {
      display: flex;
      margin-top: 0;
    }
  }
  &>div {
    font-size: 1.2rem;
    color: ${p =>p.c.grey.light[3]};
    text-align: center;
    @media only screen and (max-width: ${screenWidth[3]}) {
      display: none;
    }
  }
`

const SidebarItem = styled.li.attrs(({theme: {colour:c}}) => ({c}))`
position: relative;
${p => !(p.id === p.len - 1) && css`margin-bottom: .5rem;`}
@media only screen and (max-width: ${screenWidth[3]}) {
  margin-bottom: 0;
  flex: 1;
}
/* ${p => (p.id === 0) && css`background-color: ${p.c.primary.default }`} */

&::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: ${p =>p.c.primary.default};
  transform: scaleY(0);
  transition: transform .2s,
              width .4s cubic-bezier(1, 0, 0, 1) .2s,
              background-color .1s;
}
${p => (p.id === 0) ? '&::before,' : ''}
&:hover::before {
  transform: scaleY(1);
  width: 100%;
}
&:active::before {
  background-color: ${p =>p.c.primary.light};
}

&>a {
  &:link,
  &:visited {
    color: ${p =>p.c.grey.light[0]};
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 1.5rem 3rem;
    position: relative;
    z-index: 10;

    display: flex;
    align-items: center;
    @media only screen and (max-width: ${screenWidth[3]}) {
      justify-content: center;
      padding: 2rem;
    }
    @media only screen and (max-width: ${screenWidth[5]}) {
      flex-direction: column;
      padding: 1.5rem .5rem;
    }
  }

  &>svg {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 2rem;
    fill: currentColor;
    @media only screen and (max-width: ${screenWidth[5]}) {
      margin-right: 0;
      margin-bottom: .5rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
`


export default Sidebar