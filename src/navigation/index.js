import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'

import Boards from '../screens/Boards'
import Settings from '../screens/Settings'
import Notifications from '../screens/Notifications'
import Search from '../screens/Search'
import Home from '../screens/Home'
import AddBoard from '../screens/AddBoard'
import Board from '../screens/Board'
import {THEME} from '../config/constants'

const BoardList = createStackNavigator(
  {
    BoardList: {screen: Boards},
    AddBoard: {screen: AddBoard},
  },
  {
    mode: 'modal',
    initialRouteKey: 'BoardList',
    navigationOptions: {
      tabBarIcon: <Icons name="trello" size={22} color={THEME.primary} />,
      header: null,
    },
  }
)

const BoardStack = createStackNavigator(
  {
    BoardList,
    Board: {screen: Board},
  },
  {
    initialRouteKey: 'BoardList',
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
