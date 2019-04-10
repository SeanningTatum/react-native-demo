import React, {Component} from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
import {Text, View} from 'react-native'

import {THEME} from '../config/constants'

class Boards extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: THEME.primary,
    },
    headerRight: <Icons name="" />,
    headerTintColor: 'white',
    title: 'Trello',
  })

  state = {}

  render() {
    return (
      <View>
        <Text> BoardsScreen </Text>
      </View>
    )
  }
}

export default Boards
