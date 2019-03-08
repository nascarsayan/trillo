import React, { Component } from 'react'
import styled from 'styled-components'
import sprite from '@img/sprite.svg'

// Svg

export class Svg extends Component {
  render() {
    return (
      <svg>
        <use xlinkHref={`${sprite}#${this.props.icon}`}></use>
      </svg>
    )
  }
}

// SearchBox

export class SearchBox extends Component {
  render() {
    return (
      <StSearchBox action='#'>
        <input type='text' placeholder={this.props.placeholder} />
        <button>
          <Svg icon={this.props.icon}></Svg>
        </button>
      </StSearchBox>
    )
  }
}

const StSearchBox = styled.form.attrs(({theme: {colour:c}}) => ({c}))`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  &>input {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: ${p => p.c.grey.light[1]};
    border: none;
    padding: .7rem 2rem;
    border-radius: 100px;
    width: 90%;
    transition: all .2s;

    &:focus {
      outline: none;
      width: 100%;
      background-color: ${p => p.c.grey.light[2]};
    }

    &:focus + button {
      background-color: ${p => p.c.grey.light[2]};
    }

    &::-webkit-input-placeholder {
      font-weight: 100;
      color: ${p => p.c.grey.light[3]};
    }
  }

  &>button {
    border: none;
    margin-left: -3.25rem;
    background-color: ${p => p.c.grey.light[1]};
    
    &:focus {
      outline: none;
    }

    &:active {
      transform: translateY(2px),
    }

    &>svg {
      height: 2rem;
      width: 2rem;
      fill: ${p => p.c.grey.dark[2]};
    }
  }
`

// UserNav

export class UserNav extends Component {
  render() {
    return (
      <StUserNav>
        { this.props.children }
      </StUserNav>
    )
  }
}

const StUserNav = styled.nav.attrs(({theme: {colour:c}}) => ({c}))`
  align-self: stretch;
  display: flex;
  align-items: center;
  &>* {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &>*:hover {
    background-color: ${p => p.c.grey.light[1]};
  }
`

// IconBox

export class IconBox extends Component {
  render() {
    return (
      <StIconBox>
        <Svg icon={this.props.icon}></Svg>
        <span>{this.props.count}</span>
      </StIconBox>
    )
  }
}

const StIconBox = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  position: relative;
  &>svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: ${p => p.c.grey.dark[1]};
  }
  &>span {
    font-size: .8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: ${p => p.c.primary.default};
    color: ${p => p.c.white};
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

// User

export class User extends Component {
  render() {
    return (
      <StUser>
        <img src={this.props.image} alt='User Pic'></img>
        <span>{this.props.name}</span>
      </StUser>
    )
  }
}

const StUser = styled.div`
  &>img {
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`

