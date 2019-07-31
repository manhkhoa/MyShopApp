import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class Blink extends Component {

    componentDidMount(){
    // Toggle the state every second
        setInterval(() => (
          this.setState(previousState => (
            { isShowingText: !previousState.isShowingText }
          ))
        ), 1000);
     }

    //state object
    state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 275,
    fontSize: 18,
    color: '#ff0000',
  },
  contentContainer: {
    paddingTop: 275,
  }
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('MyShop', () => BlinkApp);