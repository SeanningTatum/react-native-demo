import React, {Component} from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import {Text, View, Button} from 'react-native'

import {THEME} from '../config/constants'

class Boards extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: THEME.primary,
    },
    headerRight: (
      <Icons
        name="ios-add"
        color="white"
        style={{marginRight: 25}}
        size={30}
        onPress={() => navigation.push('AddBoard')}
      />
    ),
    headerTintColor: 'white',
    title: 'Trello',
  })

  state = {}

  render() {
    return (
      <View>
        <Text> BoardsScreen </Text>
        <Button title="Go to board" onPress={() => this.props.navigation.push('Board')} />
        <Button title="Open Drawer" onPress={() => this.props.navigation.openDrawer()} />
      </View>
    )
  }
}

export default Boards
