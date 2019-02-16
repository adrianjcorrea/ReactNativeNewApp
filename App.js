import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends React.Component {
  state={
    name: ""
  }

changeTextHandler = (value) => {
  this.setState({name: value});
}
  render() {
    return (
      <View style={styles.container}>
        <Text>Adrians first mobile app!</Text>
        < TextInput
        style={{ width: 300,borderColor: 'black', borderWidth:1}}
        value={this.state.name}
        onChangeText={this.changeTextHandler}

        />
      </View>
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
