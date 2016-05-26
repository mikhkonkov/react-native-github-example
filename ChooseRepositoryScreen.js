/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class ChooseRepositoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  onPressButton() {
    console.log(this.state.user);
    this.props.navigator.push({id: 'user_repositories', name: this.state.user})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.welcome}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({user: text})}
          value={this.state.user}
        />
        <TouchableOpacity onPress={this.onPressButton.bind(this)}>
          <Text style={styles.welcome}>
            Search
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

