import React from 'react';
import { View, Platform } from 'react-native';
import Landing from './src/Landing';
import Search from './src/search';

export default class App extends React.Component {
  state = {
    currentScreen: "landing"
  }
  switchScrren = (currentScreen) => {
    this.setState({ currentScreen });
  }
  renderScreen = () => {
    if (this.state.currentScreen === "landing") {
      return (
        <Landing switchScreen={this.switchScrren} />
      )
    } else if (this.state.currentScreen === "search") {
      return (
        <Search switchScreen={this.switchScrren} />
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,
  }
};
