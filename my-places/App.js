import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignUp from './screens/SignUp';
import styles from './App.styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <SignUp />
      </View>
    );
  }
}

