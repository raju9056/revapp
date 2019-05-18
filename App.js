import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
       <WebView
        originWhitelist={['*']}
        source={{uri: 'https://inspiring-bhabha-bb817b.netlify.com'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
