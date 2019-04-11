import React, {Component} from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {Header, Left, Body, Right, Button, Text, Container} from 'native-base'

class AddBoard extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Container style={{backgroundColor: 'rgb(250,250,250)'}}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.pop()}>
              <Icon name="ios-arrow-back" size={24} />
            </Button>
          </Left>
          <Body>
            <StyledTitle>Create Board</StyledTitle>
          </Body>
          <Right>
            <Button transparent disabled>
              <Text>Create</Text>
            </Button>
          </Right>
        </Header>

        <InputContainer>
          <Text style={{marginRight: 12}}>Name</Text>
          <StyledInput />
        </InputContainer>
      </Container>
    )
  }
}

const StyledTitle = styled(Text)`
  color: ${props => props.theme.primary};
`

const InputContainer = styled.View`
  margin-top: 40;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #d8dde6;
  height: 50;
  background-color: white;
`

const StyledInput = styled.TextInput`
  height: 100%;
  width: 100%;
  font-size: 18;
`

export default AddBoard
