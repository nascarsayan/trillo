import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '@img/logo.png'
import { SearchBox, UserNav, User, IconBox } from '@/Components/Widgets'
import { line, screenWidth } from '@/Components/Identifiers'
import userPic from '@img/user.jpg'

class Header extends Component {
  render() {
    return (
      <StHeader>
        <img src={logo} alt='trillo logo'></img>
        <SearchBox placeholder={'Search hotels'} icon={'icon-magnifying-glass'}></SearchBox>
        <UserNav>
          <IconBox icon='icon-bookmark' count='7' />
          <IconBox icon='icon-chat' count='13' />
          <User image={userPic} name='Jonas' />
        </UserNav>
      </StHeader>
    )
  }
}

const StHeader = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  font-size:1.4rem;
  height: 7rem;
  background-color: ${p =>p.c.white};
  border-bottom: ${p => line(p)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: ${screenWidth[6]}) {
    height: 11rem;
    align-content: space-around;
  }
  &>img {
    height: 3.25rem;
    margin-left: 2rem;
  }
`

export default Header