import React, { Component } from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import Theme from 'Theme'
import Container from '@/Components/Container'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      theme: 'DarkPro'
    }
  }
  getTheme() {
    return Theme[this.state.theme]
  }
  render() {
    console.log(this.getTheme())
    return (
      <ThemeProvider theme={this.getTheme()}>
        <React.Fragment>
          <StGlobalStyle/>
          <Container />
        </React.Fragment>
      </ThemeProvider >
    )
  }
}

const StGlobalStyle = createGlobalStyle`${({theme: {colour}}) => (`
  body {
    color: ${colour.grey.dark[1]};
    background-image: linear-gradient(to right bottom, ${colour.primary.light}, ${colour.primary.dark});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
`)}`


export default App
