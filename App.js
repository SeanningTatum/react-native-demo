// @flow
import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components/native'

import AppContainer from './src/navigation'
import {THEME} from './src/config/constants'

export default class App extends Component<{}, {}> {
  state = {}

  render() {
    return (
      <ThemeProvider theme={THEME}>
        <AppContainer />
      </ThemeProvider>
    )
  }
}
