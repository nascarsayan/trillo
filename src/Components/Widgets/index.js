import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { line, shadowLight } from '@/Components/Identifiers'
import sprite from '@img/sprite.svg'
import chevron from '@img/chevron-thin-right.svg'

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

export const pulsate = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: none;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
  }
`

export const ButtonInline = styled.button.attrs(({theme: {colour:c}}) => ({c}))`
  border: none;
  color: ${p =>p.c.primary.default};
  font-size: inherit;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  transition: all .2s;
  & span {
    margin-left: 3px;
    transition: margin-left .2s;
  }
  &:hover {
    color: ${p =>p.c.grey.dark[0]};
    span {
      margin-left: 8px;
    }
  }

  &:focus {
    outline: none;
    animation: ${pulsate} 1s infinite;
  }
`


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

// GalleryItem

export class GalleryItem extends Component {
  render() {
    return (
      <StGalleryItem>
        <img src={this.props.img.src} alt={this.props.img.alt}></img>
      </StGalleryItem>
    )
  }
}

const StGalleryItem = styled.figure.attrs(({theme: {colour:c}}) => ({c}))`
  &>img {
    width: 100%;
    display: block;
  }

`

// Paragraph
export class Paragraph extends Component {
  render() {
    return (
      <StParagraph rid={this.props.rid}>
        {this.props.children}
      </StParagraph>
    )
  }
}

const StParagraph = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
  ${p => (p.rid !== 0) && css`margin-bottom: 2rem;`}
`

// FeatureList

export class FeatureList extends Component {
  render() {
    return (
      <StFeatureList>
        {this.props.features.map((f, idx) => (
          <li key={`${idx}`}>{f}</li>
        ))}
      </StFeatureList>
    )
  }
}

const StFeatureList = styled.ul.attrs(({theme: {colour:c}}) => ({c}))`
list-style: none;
margin: 3rem 0;
padding: 3rem 0;
border-top: ${p => line(p)};
border-bottom: ${p => line(p)};
display: flex;
flex-wrap: wrap;
&>li {
  flex: 0 0 50%;
  margin: .35rem 0;

  &::before {
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-right: .7rem;

    /* Older browsers */
    /* background-image: url(${chevron});
    background-size: cover; */

    /* Newr browsers -masks */
    background-color: ${p => p.c.primary.default};
    -webkit-mask-image:  url(${chevron});
    -webkit-mask-size: cover;
    mask-image:  url(${chevron});
    mask-size: cover;
  }
}
`

// Recommend

export class Recommend extends Component {
  render() {
    const { data } = this.props
    const len = data.length
    return (
      <StRecommend>
        <p>{data[0].name}{(len > 1) ? ` and ${len - 1} others`: ''} recommend{(len > 1) ? '': 's'} this hotel.</p>
        <div>
          {data.map((d, idx) => (
            <img key={`${idx}`} src={d.pic} alt={`Friend ${idx + 1}`}></img>
          ))}
        </div>
        
      </StRecommend>
    )
  }
}

const StRecommend = styled.div.attrs(({theme: {colour:c}}) => ({c}))`
font-size: 1.3rem;
color: ${p => p.c.grey.dark[2]};
display: flex;
justify-content: space-between;
align-items: center;
&>div {
  &>p {

  }
  &>img {
    box-sizing: content-box;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 3px solid #fff;
    &:not(:last-child) {
      margin-right: -1.5rem;
    }
  }
}
`

// Review

export class Review extends Component {
  render() {
    const { text, date, rating, user: { img, name } } = this.props.data
    return (
      <StReview>
        <blockquote>
          {text}
        </blockquote>
        <figcaption>
          <img src={img} alt={name}></img>
          <div className='user-box'>
            <p className='name'>{name}</p>
            <p className='date'>{date}</p>
          </div>
          <div className='rating'>{rating}</div>
        </figcaption>
      </StReview>
    )
  }
}

const StReview = styled.figure.attrs(({theme: {colour:c}}) => ({c}))`

  position: relative;
  align-items: center;
  background-color: ${p => p.c.white};
  box-shadow: ${shadowLight};
  padding: 3rem;
  margin-bottom: 3.5rem;
  overflow: hidden;

  &::before {
    content: "“";
    position: absolute;
    top: -2.75rem;
    left: -1rem;
    line-height: 1;
    font-size: 20rem;
    color: ${p => p.c.grey.light[1]};
    font-family: sans-serif;
    z-index: 1;
  }

  &>blockquote {
    margin-bottom: 2rem;
    z-index: 2;
    position: relative;
  }
  &>figcaption {
    
    display: flex;
    align-items: center;
    &>img {
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 50%;
    }
    &>.user-box {
      margin-right: auto;
      margin-left: 1.5rem;
      &>.name {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: .4rem;
        text-transform: uppercase;
      }
      &>.date {
        font-size: 1rem;
        color: ${p => p.c.grey.dark[3]};
      }
    }
    &>.rating {
      font-size: 2.2rem;
      color: ${p => p.c.primary.default};
      font-weight: 300;
    }
  }
`