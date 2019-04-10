import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'

import Boards from '../screens/Boards'
import Settings from '../screens/Settings'
import Notifications from '../screens/Notifications'
import Search from '../screens/Search'
import Home from '../screens/Home'
import {THEME} from '../config/constants'

const BoardStack = createStackNavigator(
  {
    Board: {screen: Boards},
  },
  {
    initialRouteName: 'Board',
    navigationOptions: {
      tabBarIcon: <Icons name="trello" size={22} color={THEME.primary} />,
    },
  }
)

const AppNavigator = createBottomTabNavigator({
  Boards: BoardStack,
  Settings: {screen: Settings},
  Notifications: {screen: Notifications},
  Search: {screen: Search},
  Home: {screen: Home},
})

export default createAppContainer(AppNavigator)
