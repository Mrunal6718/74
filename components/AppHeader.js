import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style = {styles.textContainer}>
        <Text style = {styles.text}>BOOK HUB</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop:10
  },
  text: {
    color: '#563F1B',
    padding: 20,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 25
  }
});

export default AppHeader;