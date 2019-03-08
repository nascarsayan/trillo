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

// Form

export class Form extends Component {
  render() {
    return (
      <StForm>
        <input type='text' placeholder={this.props.placeholder} />
        <button>
          <Svg icon={this.props.icon}></Svg>
        </button>
      </StForm>
    )
  }
}

const StForm = styled.form``

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

const StUserNav = styled.nav``

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

const StIconBox = styled.div``

// User

export class User extends Component {
  render() {
    return (
      <StUser>
        <img src={this.props.image} alt='User Pic'></img>
        <span>{this.props.user}</span>
      </StUser>
    )
  }
}

const StUser = styled.div``

