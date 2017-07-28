import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import CategoryList from './src/components/CategoryList';

export default class App extends Component {

  errorCB(err) {
    console.log(`SQL Error: ${err}`);
  }

  successCB() {
    console.log('SQL executed');
  }

  openCB() {
    console.log('Database OPENED');
  }

  render() {
    return (
      <View>
        <Header navText={'JAGUARAI'} />
        <CategoryList />
      </View>
    );
  }
}

AppRegistry.registerComponent('tester', () => App);
