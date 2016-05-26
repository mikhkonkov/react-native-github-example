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
  ScrollView,
  Image
} from 'react-native';

export default class UserRepositories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log(this.props.user);
    fetch('https://api.github.com/users/' + this.props.user + '/repos')
    .then((response) => response.json())
    .then((responseText) => {
      this.setState({data: responseText});
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          {this.state.data.length > 0 ? <Image style={styles.container} source={{uri: this.state.data[0].owner.avatar_url}} style={{width: 100, height: 100}} /> : null}
          {this.state.data.map(function(item, index) {
            return (
              <View key={index}>
                <Text style={styles.welcome}>{item.full_name}</Text>
              </View>
              )
          })}
        </ScrollView>
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

