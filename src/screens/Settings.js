import React, {Component} from 'react'
import {Text, View, ScrollView, SafeAreaView, WebView} from 'react-native'
import {Pages} from 'react-native-pages'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const Page = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ScrollView style={{flex: 1}}>
      <Text>{lorem}</Text>
      <Text>{lorem}</Text>
      <Text>{lorem}</Text>
      <Text>{lorem}</Text>
      <Text>{lorem}</Text>
      <Text>{lorem}</Text>
      <Text>{lorem}</Text>
      <Text>{lorem}</Text>
    </ScrollView>
  </View>
)
class Settings extends Component {
  state = {}

  handlePageChange = state => {
    console.log(state)
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Pages>
          <Page />
          <Page />
          <WebView source={{uri: 'https://github.com/facebook/react-native'}} />
          <Page />
          <Page />
          <Page />
          <View />
        </Pages>
      </SafeAreaView>
    )
  }
}

export default Settings
