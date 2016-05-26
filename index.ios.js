/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import ChooseRepositoryScreen from './ChooseRepositoryScreen'
import UserRepositories from './UserRepositories'

class AwesomeProject extends Component {

  render() {
    return (
      <Navigator style={{flex: 1}}
        initialRoute={{id: 'choose_repository_screen'}}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'choose_repository_screen':
              return ( <ChooseRepositoryScreen navigator={navigator} /> );
            case 'user_repositories':
              return ( <UserRepositories navigator={navigator} user={route.name}/> );
          }
        }
        }
      />
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
